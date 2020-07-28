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

  constructor(
    private $formBuilder: FormBuilder,
    private $daily: DailyAdviceManagementService,
    private $fileUploadService: FileUploadService,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $utility: UtilityService,
    private $route: Router

  ) {
    if ($router.snapshot.data.dailyData && $router.snapshot.data.dailyData.data) {
      this.adviceDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.adviceDetails.id, this.adviceDetails.title);
    }
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
        mediaType: MEDIA_TYPE.IMAGE
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

    this.imageFile = event;
    console.log(event);

  }

  async onSubmit() {
    if (this.adviceForm.invalid) {
      this.adviceForm.markAllAsTouched();
      return;
    }
    const body = { ...this.adviceForm.value };
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
        body['mediaUrl'] = this.profilePicURL;
        body.mediaType = this.adviceDetails.mediaType;
      }
      if (this.adviceDetails.mediaType == 2) {
        body['thumbnailUrl'] = this.thumbnailUrl;
        body.mediaType = this.adviceDetails.mediaType;
      }
    }

    if (this.isPostLater.value) {
      body.postedAt = new Date(this.adviceForm.get('postedAt').value);
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

}