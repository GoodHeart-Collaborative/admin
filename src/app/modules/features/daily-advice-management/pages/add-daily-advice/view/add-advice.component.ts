import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { DailyAdviceManagementService } from '../../../service/daily-advice-management.service';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DAILY_ADVICE } from 'src/app/constant/routes';

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
  dailyInspirationDetails: any;
  postDate: boolean = false;
  descriptionMaxLength = VALIDATION_CRITERIA.descriptionMaxLength;
  titleMaxLength = VALIDATION_CRITERIA.titleMaxLength;

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
      this.dailyInspirationDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.dailyInspirationDetails.id, this.dailyInspirationDetails.title);
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
      });
  }

  form(name) {
    return this.adviceForm.controls[name];
  }

  get isPostLater() {
    return this.adviceForm.get('isPostLater') as FormControl;
  }

  getDailyInspiration() {
    if (this.dailyInspirationDetails) {
      console.log(this.dailyInspirationDetails.imageUrl);
      this.profilePicURL = this.dailyInspirationDetails.imageUrl;
      this.adviceForm.patchValue(this.dailyInspirationDetails);
      if (this.dailyInspirationDetails && this.dailyInspirationDetails.postedAt && this.dailyInspirationDetails.isPostLater) {

        this.adviceForm.get('postedAt').patchValue(new Date(this.dailyInspirationDetails.postedAt));
      }
    }
  }


  setimageFile(event) {
    this.imageFile = event;
  }

  async onSubmit() {
    if (this.adviceForm.invalid) {
      this.adviceForm.markAllAsTouched();
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    const body = { imageUrl: this.profilePicURL, ...this.adviceForm.value };

    if (this.isPostLater.value) {
      body.postedAt = new Date(this.adviceForm.get('postedAt').value).getTime();
    }
    this.adviceForm.disable();
    if (this.dailyInspirationDetails && this.dailyInspirationDetails._id) {
      body.status = this.dailyInspirationDetails.status;
      this.$daily.editCategory(this.dailyInspirationDetails._id, body).then(
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
