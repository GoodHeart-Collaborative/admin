import { Component, OnInit, Inject } from '@angular/core';
import { DailyInspirationService } from '../../../service/daily-inspiration.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { onSelectFile } from 'src/app/constant/file-input';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria'
import { RequestInterceptor } from 'src/app/Interceptors/request.interceptor';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DAILY_INSPIRATION } from 'src/app/constant/routes';
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

  constructor(
    private $formBuilder: FormBuilder,
    private $daily: DailyInspirationService,
    private $fileUploadService: FileUploadService,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $utility: UtilityService,
    private $route: Router

  ) {
    if ($router.snapshot.data.dailyData && $router.snapshot.data.dailyData.data) {
      this.dailyInspirationDetails = $router.snapshot.data.dailyData.data;
      console.log();
      
      $breadcrumb.replace(this.dailyInspirationDetails.id, this.dailyInspirationDetails.title);
    }
  }

  ngOnInit() {
    this.createForm();
    this.isPostLater.valueChanges.subscribe(value => {
      if (value) {
        this.inspirationForm.addControl('createdAt', new FormControl('', Validators.required))
      } else {
        this.inspirationForm.removeControl('createdAt');
      }
    });
    this.getDailyInspiration();
  }

  createForm() {
    this.inspirationForm = this.$formBuilder.group(
      {
        title: ['', [Validators.required, Validators.maxLength(this.titleMaxLength)]],
        isPostLater: [false],
        description: ['', [Validators.required, Validators.maxLength(this.descriptionMaxLength)]],
      });
  }

  form(name) {
    return this.inspirationForm.controls[name];
  }

  get isPostLater() {
    return this.inspirationForm.get('isPostLater') as FormControl;
  }

  getDailyInspiration() {
    console.log(this.dailyInspirationDetails.imageUrl);
    if (this.dailyInspirationDetails) {
      this.profilePicURL = this.dailyInspirationDetails.imageUrl;
      this.inspirationForm.patchValue(this.dailyInspirationDetails);
      if (this.dailyInspirationDetails && this.dailyInspirationDetails.createdAt && this.dailyInspirationDetails.isPostLater) {

        this.inspirationForm.get('createdAt').patchValue(new Date(this.dailyInspirationDetails.createdAt));
      }
    }
  }


  setimageFile(event) {
    this.imageFile = event;
  }

  async onSubmit() {
    if (this.inspirationForm.invalid) {
      this.inspirationForm.markAllAsTouched();
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    const body = { imageUrl: this.profilePicURL, ...this.inspirationForm.value };

    if (this.isPostLater.value) {
      body.createdAt = new Date(this.inspirationForm.get('createdAt').value).getTime();
    }
    this.inspirationForm.disable();
    if (this.dailyInspirationDetails && this.dailyInspirationDetails._id) {
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

}
