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
  constructor(
    private $formBuilder: FormBuilder,
    private $daily: DailyUnicornHumourService,
    private $fileUploadService: FileUploadService,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $utility: UtilityService,
    private $route: Router

  ) {
    if ($router.snapshot.data.dailyData && $router.snapshot.data.dailyData.data) {
      this.unicornDetails = $router.snapshot.data.dailyData.data;
      console.log(this.unicornDetails);
      $breadcrumb.replace(this.unicornDetails.id, this.unicornDetails.title);

    }
    console.log(this.mediaType);
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

  createForm() {
    this.unicornForm = this.$formBuilder.group(
      {
        title: ['', [Validators.required, Validators.maxLength(this.titleMaxLength)]],
        isPostLater: [false],
        type: HOME_TYPE.UNICRON,
        mediaType: MEDIA_TYPE.IMAGE
      });
  }

  form(name) {
    return this.unicornForm.controls[name];
  }



  get isPostLater() {
    return this.unicornForm.get('isPostLater') as FormControl;
  }

  getDailyInspiration() {
    if (this.unicornDetails) {
      this.profilePicURL = this.unicornDetails.imageUrl;
      this.unicornForm.patchValue(this.unicornDetails);
      if (this.unicornDetails && this.unicornDetails.postedAt && this.unicornDetails.isPostLater) {
        this.unicornForm.get('postedAt').patchValue(new Date(this.unicornDetails.postedAt));
      }
    }
  }


  setimageFile(event) {
    this.imageFile = event;
  }

  async onSubmit() {
    if (this.unicornForm.invalid) {
      this.unicornForm.markAllAsTouched();
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    const body = { imageUrl: this.profilePicURL, ...this.unicornForm.value };

    if (this.isPostLater.value) {
      body.postedAt = new Date(this.unicornForm.get('postedAt').value);
    }

    getTrimmed(body);
    this.unicornForm.disable();
    if (this.unicornDetails && this.unicornDetails._id) {
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
    console.log(body);

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


}
