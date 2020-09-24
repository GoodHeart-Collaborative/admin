import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { DailyAdviceManagementService } from '../../../service/daily-advice-management.service';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DAILY_ADVICE } from 'src/app/constant/routes';
import { HOME_TYPE, MEDIA_TYPE } from 'src/app/constant/drawer';
import { EditProfileService } from 'src/app/modules/features/admin/edit-profile/service/edit-profile.service';
import { requiredMedia } from 'src/app/constant/messages';

@Component({
  selector: 'app-add-advice',
  templateUrl: './add-advice.component.html',
  styleUrls: ['./add-advice.component.scss']
})
export class AddAdviceComponent implements OnInit {
  today: Date = new Date();

  adviceForm: FormGroup;
  profilePicURL: any;
  imageFile: any;
  adviceDetails: any;
  postDate: boolean = false;
  descriptionMaxLength = VALIDATION_CRITERIA.descriptionMaxLength;
  titleMaxLength = VALIDATION_CRITERIA.titleMaxLength;
  thumbnailUrl: any;
  profileDetail: any;

  constructor(
    private $formBuilder: FormBuilder,
    private $daily: DailyAdviceManagementService,
    private $fileUploadService: FileUploadService,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $utility: UtilityService,
    private $route: Router,
    private $editProfileService: EditProfileService

  ) {
    this.today = new Date(new Date(new Date().setHours(0, 0, 0)).setDate(new Date().getDate() + 1));
    if ($router.snapshot.data.dailyData && $router.snapshot.data.dailyData.data) {
      this.adviceDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.adviceDetails._id, this.adviceDetails.title);
      // this.today = this.adviceDetails && this.adviceDetails.postedAt 
    }
    this.getProfileDetail();
  }

  ngOnInit() {
    this.createForm();
    this.isPostLater.valueChanges.subscribe(value => {
      if (value) {
        this.adviceForm.addControl('postedAt', new FormControl('', Validators.required));
      } else {
        this.adviceForm.removeControl('postedAt');
      }
    });
    this.getDailyInspiration();
  }

  createForm() {
    this.adviceForm = this.$formBuilder.group(
      {
        title: ['', [Validators.required, Validators.maxLength(this.titleMaxLength)]],
        isPostLater: [false],
        description: ['', [Validators.required, Validators.maxLength(this.descriptionMaxLength)]],
        type: HOME_TYPE.DAILY_ADVICE,
        mediaType: MEDIA_TYPE.IMAGE,
        addedBy: ['']
      });
  }

  form(name) {
    return this.adviceForm.controls[name];
  }

  get isPostLater() {
    return this.adviceForm.get('isPostLater') as FormControl;
  }

  getDailyInspiration() {
    if (this.adviceDetails) {
      this.profilePicURL = this.adviceDetails.mediaUrl;
      if (this.adviceDetails.mediaType == 2) {
        this.thumbnailUrl = this.adviceDetails.mediaUrl;
       }
      this.adviceForm.patchValue(this.adviceDetails);
      if (this.adviceDetails && this.adviceDetails.postedAt && this.adviceDetails.isPostLater) {
        this.adviceForm.get('postedAt').patchValue(new Date(this.adviceDetails.postedAt));
      }
    }
  }


  setimageFile(event) {
    if (!event) {
      this.imageFile = null;
      this.profilePicURL = '';
      this.thumbnailUrl = '';
      return;
    }
    this.imageFile = event;
  }

  async onSubmit() {
    if (this.adviceForm.invalid) {
      this.adviceForm.markAllAsTouched();
      return;
    }
    if (!this.adviceDetails && this.adviceForm.get('postedAt').value &&
    new Date(this.adviceForm.get('postedAt').value).getTime()
    < new Date(23, 59, 59, 999).getTime()) {
    this.$utility.error('Invalid date selected');
    return;
  }
  //   if (this.adviceDetails && this.adviceForm.get('postedAt').value &&
  //   new Date(this.adviceForm.get('postedAt').value).getTime()
  //   < new Date(this.today).getTime()) {
  //   this.$utility.error('Invalid date selected');
  //   return;
  // }
    const body = { ...this.adviceForm.value };
    if (this.profileDetail) {
        body.addedBy = this.profileDetail.userId;
    }
    if (this.imageFile) {
      if (this.imageFile && this.imageFile.type == 1) {
        const data: any = await this.$fileUploadService.uploadFile(this.imageFile.file);
        const url = data.Location;
        body['mediaUrl'] = url;
        body.mediaType = this.imageFile.type;
      }
      if (this.imageFile && this.imageFile.type == 2) {
        const dataForVideo: any = await this.$fileUploadService.uploadFile(this.imageFile.videoFile);
        const dataForThumb: any = await this.$fileUploadService.uploadFile(this.imageFile.thumbNailFile);
        body['mediaUrl'] = dataForVideo.Location;
        body['thumbnailUrl'] = dataForThumb.Location;
        body.mediaType = this.imageFile.type;
      }
    } else if (this.adviceDetails) {
      if (this.adviceDetails.mediaType == 1) {
        if (this.profilePicURL) {
          body['mediaUrl'] = this.profilePicURL;
          body.mediaType = this.adviceDetails.mediaType;
        } else {
          delete body.mediaType;
          body['mediaUrl'] = '';
        }
      }
      if (this.adviceDetails.mediaType == 2) {
        if (this.thumbnailUrl) {
          body['mediaUrl'] = this.adviceDetails.mediaUrl
          body['thumbnailUrl'] = this.thumbnailUrl;
          body.mediaType = this.adviceDetails.mediaType;
        } else {
          delete body.mediaType;
          body['mediaUrl'] = '';
          body['thumbnailUrl'] = '';
        }
      }
    }

    if (!body.mediaUrl) {
      this.$fileUploadService.showAlert(requiredMedia);
      return;
    }
    if (this.isPostLater.value) {
      body.postedAt = new Date(this.adviceForm.get('postedAt').value).toString();
    }

    this.adviceForm.disable();
    if (this.adviceDetails && this.adviceDetails._id) {
      delete body.type;
      delete body.status;
      this.$daily.editCategory(this.adviceDetails._id, body).then(
        data => {
          this.adviceForm.enable();
          this.$utility.success(data.message);
          this.$route.navigate([DAILY_ADVICE.fullUrl]);
        },
        err => {
          this.adviceForm.enable();
        }
      );
      return;
    }
    this.$daily.addCategory(body).then(
      data => {
        this.adviceForm.enable();
        this.$utility.success(data.message);
        this.$route.navigate([DAILY_ADVICE.fullUrl]);
      },
      err => {
        this.adviceForm.enable();

      }
    );
  }


  onCancel() {
    this.$route.navigate([DAILY_ADVICE.fullUrl]);
  }

  /**
   * @description Getting Admin Profile Detail
   */
  getProfileDetail() {
    this.$editProfileService.getProfileDetail()
      .subscribe(
        (response: any) => {
          this.profileDetail = response.data;
        }, err => { }
      );
  }

}