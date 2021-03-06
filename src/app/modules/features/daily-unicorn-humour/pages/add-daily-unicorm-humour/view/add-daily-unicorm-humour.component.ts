import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VALIDATION_CRITERIA, getTrimmed } from 'src/app/constant/validation-criteria';
import { DailyUnicornHumourService } from '../../../service/daily-unicorn-humour.service';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DAILY_UNICORN } from 'src/app/constant/routes';
import { HOME_TYPE, MEDIA_TYPE } from 'src/app/constant/drawer';
import { EditProfileService } from 'src/app/modules/features/admin/edit-profile/service/edit-profile.service';
import { requiredMedia } from 'src/app/constant/messages';
@Component({
  selector: 'app-add-daily-unicorm-humour',
  templateUrl: './add-daily-unicorm-humour.component.html',
  styleUrls: ['./add-daily-unicorm-humour.component.scss']
})
export class AddDailyUnicormHumourComponent implements OnInit {
  today: Date = new Date();
  unicornForm: FormGroup;
  profilePicURL: any;
  imageFile: any;
  unicornDetails: any;
  postDate: boolean = false;
  titleMaxLength = VALIDATION_CRITERIA.titleMaxLength;
  mediaType = MEDIA_TYPE;
  thumbnailUrl: any;
  profileDetail: any;
  constructor(
    private $formBuilder: FormBuilder,
    private $daily: DailyUnicornHumourService,
    private $fileUploadService: FileUploadService,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $utility: UtilityService,
    private $route: Router,
    private $editProfileService: EditProfileService

  ) {
    this.today = new Date(new Date(new Date().setHours(0, 0, 0)).setDate(new Date().getDate() + 1));
    if ($router.snapshot.data.dailyData && $router.snapshot.data.dailyData.data) {
      this.unicornDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.unicornDetails._id, this.unicornDetails.title);
    }
    this.getProfileDetail();
  }

  ngOnInit() {
    this.createForm();
    this.isPostLater.valueChanges.subscribe(value => {
      if (value) {
        this.unicornForm.addControl('postedAt', new FormControl('', Validators.required))
      } else {
        this.unicornForm.removeControl('postedAt');
      }
    });
    this.getDailyInspiration();
  }

  /**
   * Creating Form
   */
  createForm() {
    this.unicornForm = this.$formBuilder.group(
      {
        title: ['', [Validators.required, Validators.maxLength(this.titleMaxLength)]],
        isPostLater: [false],
        type: HOME_TYPE.UNICRON,
        mediaType: MEDIA_TYPE.IMAGE,
        addedBy: ['']
      });
  }
  /**
   *  Getter
   * @param name
   */
  form(name) {
    return this.unicornForm.controls[name];
  }

  get isPostLater() {
    return this.unicornForm.get('isPostLater') as FormControl;
  }

  /**
   * Patch Value in Form
   */
  getDailyInspiration() {
    if (this.unicornDetails) {
      this.profilePicURL = this.unicornDetails.mediaUrl;
      if (this.unicornDetails.mediaType == 2) {
        this.thumbnailUrl = this.unicornDetails.mediaUrl;

      }
      this.unicornForm.patchValue(this.unicornDetails);
      if (this.unicornDetails && this.unicornDetails.postedAt && this.unicornDetails.isPostLater) {
        this.unicornForm.get('postedAt').patchValue(new Date(this.unicornDetails.postedAt));
      }
    }
  }

  /**
   * setting Image in ImageFile
   * @param event
   */
  setimageFile(event) {
    if (!event) {
      this.imageFile = null;
      this.profilePicURL = '';
      this.thumbnailUrl = '';
      return;
    }
    event.type === 1 ? this.thumbnailUrl = '' : this.profilePicURL = '';
    this.imageFile = event;
  }
  /**
   * Submit Form
   */
  async onSubmit() {
    console.log(this.unicornForm);
    

    if (this.unicornForm.invalid || this.unicornForm.disabled) {
      if (this.unicornForm.get('postedAt') && this.unicornForm.get('postedAt').value && this.isPostLater.value &&
      new Date(this.unicornForm.get('postedAt').value).getTime()
      < new Date().setHours(23, 59, 59, 999)) {
        debugger;
      this.$utility.error('Invalid date selected');
  
    }
   
      this.unicornForm.markAllAsTouched();
      return;
    }
 
    const body = { ...this.unicornForm.value };
    console.log(body, 'sssssssssssssssssssssssssss');
    this.unicornForm.disable();
    
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
    } else if (this.unicornDetails) {
      if (this.unicornDetails.mediaType == 1) {
        if (this.profilePicURL) {
          body['mediaUrl'] = this.profilePicURL;
          body.mediaType = this.unicornDetails.mediaType;
        } else {
          delete body.mediaType;
          body['mediaUrl'] = '';
        }
      }
      if (this.unicornDetails.mediaType == 2) {
        if (this.thumbnailUrl) {
          body['mediaUrl'] = this.unicornDetails.mediaUrl;
          body['thumbnailUrl'] = this.thumbnailUrl;
          body.mediaType = this.unicornDetails.mediaType;
        } else {
          delete body.mediaType;
          body['mediaUrl'] = '';
          body['thumbnailUrl'] = '';
        }
      }
    }
    if (!body.mediaUrl) {
      this.unicornForm.enable();
      this.$fileUploadService.showAlert(requiredMedia);
      return;
    }
    if (this.isPostLater.value) {
      body.postedAt = new Date(this.unicornForm.get('postedAt').value).getTime();
    }

    console.log(body);
    getTrimmed(body);
    
    if (this.unicornDetails && this.unicornDetails._id) {
      delete body.type;
      this.$daily.editCategory(this.unicornDetails._id, body).then(
        data => {
          this.unicornForm.enable();
          this.$utility.success(data.message);
          this.$route.navigate([DAILY_UNICORN.fullUrl]);
        },
        err => {
          this.unicornForm.enable();
        }
      );
      return;
    }
    this.$daily.addCategory(body).then(
      data => {
        this.unicornForm.enable();
        this.$utility.success(data.message);
        this.$route.navigate([DAILY_UNICORN.fullUrl]);
      },
      err => {
        this.unicornForm.enable();

      }
    );
  }


  onCancel() {
    this.$route.navigate([DAILY_UNICORN.fullUrl]);
  }


  /**
   * @title Getting Admin Profile Detail
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
