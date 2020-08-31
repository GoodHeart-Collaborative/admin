import { Component, OnInit, Inject } from '@angular/core';
import { DailyInspirationService } from '../../../service/daily-inspiration.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { VALIDATION_CRITERIA, getTrimmed } from 'src/app/constant/validation-criteria'
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DAILY_INSPIRATION } from 'src/app/constant/routes';
import { HOME_TYPE } from 'src/app/constant/drawer';
import { EditProfileService } from 'src/app/modules/features/admin/edit-profile/service/edit-profile.service';
import { requiredMedia } from 'src/app/constant/messages';
@Component({
  selector: 'app-add-daily-inspiratin',
  templateUrl: './add-daily-inspiratin.component.html',
  styleUrls: ['./add-daily-inspiratin.component.scss']
})
export class AddDailyInspiratinComponent implements OnInit {
  today: Date = new Date();
  inspirationForm: FormGroup;
  profilePicURL: any;
  imageFile: any;
  dailyInspirationDetails: any;
  postDate: boolean = false;
  descriptionMaxLength = VALIDATION_CRITERIA.descriptionMaxLength;
  titleMaxLength = VALIDATION_CRITERIA.titleMaxLength;
  thumbnailUrl: any;
  profileDetail: any;
  constructor(
    private $formBuilder: FormBuilder,
    private $daily: DailyInspirationService,
    private $fileUploadService: FileUploadService,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $utility: UtilityService,
    private $route: Router,
    private $editProfileService: EditProfileService

  ) {
    this.today = new Date(new Date(new Date().setHours(0, 0, 0)).setDate(new Date().getDate() + 1));
    if ($router.snapshot.data.dailyData && $router.snapshot.data.dailyData.data) {
      this.dailyInspirationDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.dailyInspirationDetails._id, this.dailyInspirationDetails.title);
    }
    this.getProfileDetail();
  }

  ngOnInit() {
    this.createForm();
    this.isPostLater.valueChanges.subscribe(value => {
      if (value) {
        this.inspirationForm.addControl('postedAt', new FormControl('', Validators.required))
      } else {
        this.inspirationForm.removeControl('postedAt');
      }
    });
    this.getDailyInspiration();
  }
  /**
   * Creating Form
   */

  createForm() {
    this.inspirationForm = this.$formBuilder.group(
      {
        title: ['', [Validators.required, Validators.maxLength(this.titleMaxLength)]],
        isPostLater: [false],
        description: ['', [Validators.required, Validators.maxLength(this.descriptionMaxLength)]],
        type: HOME_TYPE.INSPIRATION,
        mediaType: [1],
        addedBy: ['']
      });
  }

  form(name) {
    return this.inspirationForm.controls[name];
  }

  get isPostLater() {
    return this.inspirationForm.get('isPostLater') as FormControl;
  }
  /**
   * Patch Value in Form
   */
  getDailyInspiration() {
    if (this.dailyInspirationDetails) {
      this.profilePicURL = this.dailyInspirationDetails.mediaUrl;
      if (this.dailyInspirationDetails.mediaType == 2) {
        this.thumbnailUrl = this.dailyInspirationDetails.mediaUrl;

      }
      this.inspirationForm.patchValue(this.dailyInspirationDetails);
      if (this.dailyInspirationDetails && this.dailyInspirationDetails.postedAt && this.dailyInspirationDetails.isPostLater) {
        this.inspirationForm.get('postedAt').patchValue(this.dailyInspirationDetails.postedAt);
      }
    }
  }


  setimageFile(event) {
    console.log(event);
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
    if (this.inspirationForm.invalid) {
      if (this.inspirationForm.get('postedAt').value &&
        new Date(this.inspirationForm.get('postedAt').value).getTime()
        < new Date(this.today).getTime()) {
        this.$utility.error('Invalid date selected');
      }
      this.inspirationForm.markAllAsTouched();
      return;
    }
    const body = { ...this.inspirationForm.value };
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
    } else if (this.dailyInspirationDetails) {
      if (this.dailyInspirationDetails.mediaType == 1) {
        if (this.profilePicURL) {
          body['mediaUrl'] = this.profilePicURL;
          body.mediaType = this.dailyInspirationDetails.mediaType;
        } else {
          delete body.mediaType;
          body['mediaUrl'] = '';
        }
      }
      if (this.dailyInspirationDetails.mediaType == 2) {

        if (this.thumbnailUrl) {
          body['mediaUrl'] = this.dailyInspirationDetails.mediaUrl
          body['thumbnailUrl'] = this.thumbnailUrl;
          body.mediaType = this.dailyInspirationDetails.mediaType;
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
      body.postedAt = new Date(this.inspirationForm.get('postedAt').value).toString();
      console.log(body.postedAt);
    }
    getTrimmed(body);
    this.inspirationForm.disable();
    if (this.dailyInspirationDetails && this.dailyInspirationDetails._id) {
      delete body.type;
      this.$daily.editCategory(this.dailyInspirationDetails._id, body).then(
        data => {
          this.inspirationForm.enable();
          this.$utility.success(data.message);
          this.$route.navigate([DAILY_INSPIRATION.fullUrl]);
        },
        err => {
          this.inspirationForm.enable();
        }
      );
      return;
    }
    this.$daily.addCategory(body).then(
      data => {
        this.inspirationForm.enable();
        this.$utility.success(data.message);
        this.$route.navigate([DAILY_INSPIRATION.fullUrl]);
      },
      err => {
        this.inspirationForm.enable();

      }
    );
  }


  onCancel() {
    this.$route.navigate([DAILY_INSPIRATION.fullUrl]);
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