import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ExpertService } from '../../../service/expert.service';
import { EXPERT_CONTENT_TYPE, PRAVICY } from 'src/app/constant/drawer';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { requiredMedia } from 'src/app/constant/messages';
import { Location } from '@angular/common';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ExpertDetailsService } from '../../expert-details/service/expert-details.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-add-expert-content',
  templateUrl: './add-expert-content.component.html',
  styleUrls: ['./add-expert-content.component.scss']
})
export class AddExpertContentComponent implements OnInit {
  expertContentForm: FormGroup;
  categoryData: any[];
  expertContentId: string;
  contentType = EXPERT_CONTENT_TYPE;
  privacyData = PRAVICY;
  imageFile: any;
  thumbnailUrl: string;
  profilePicURL: string;
  details: any;
  expertData: any;
  allowedTypes: number[];
  topicMaxLength = VALIDATION_CRITERIA.topicMaxLength;
  descriptionMaxLength = VALIDATION_CRITERIA.descriptionMaxLength;
  reset = 0;
  constructor(
    private $fb: FormBuilder,
    $activatedRoute: ActivatedRoute,
    private $service: ExpertService,
    private $utility: UtilityService,
    private $fileUploadService: FileUploadService,
    private $location: Location,
    $breadcrumb: BreadcrumbService,
    $expertPostService: ExpertDetailsService
  ) {
    if ($activatedRoute.snapshot.parent &&
      $activatedRoute.snapshot.parent.parent.params &&
      $activatedRoute.snapshot.parent.parent.params.id) {

      this.expertContentId = $activatedRoute.snapshot.parent.parent.params.id;
      this.$service.updateDetails(this.expertContentId).then(res => {
        if (res && res.data && res.data[0]) {
          this.expertData = res.data[0];
          $breadcrumb.replace(this.expertContentId, this.expertData.name);
          $breadcrumb.replace(this.expertData.name, this.expertData.name, `/admin/expert/${this.expertContentId}/details`);
          this.categoryData = this.expertData.categoryData;
        }
      });
    }
    this.createForm();
    if ($activatedRoute.snapshot && $activatedRoute.snapshot.params.id) {

      $expertPostService.updateDetails($activatedRoute.snapshot.params.id).then(res => {
        if (res && res.data && res.data[0]) {
          this.details = res.data[0];
          this.allowedTypes = this.details.mediaType == 2 ? [2] : [1, 3];
          $breadcrumb.replace(this.details._id, this.details.topic);
          this.patchValueInForm();
        }
      });
    }
  }

  ngOnInit() { }

  patchValueInForm() {
    this.expertContentForm.patchValue(this.details);
    if (this.details && this.details.mediaUrl) {
      this.profilePicURL = this.details.mediaUrl;
      if (this.details.mediaType == 2) {
        this.thumbnailUrl = this.details.mediaUrl;
      }
    }
  }
  createForm() {
    this.expertContentForm = this.$fb.group({
      expertId: [this.expertContentId],
      categoryId: ['', Validators.required],
      price: [0, [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.priceMaxLength)]],
      contentId: [null, Validators.required],
      mediaType: [],
      description: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.descriptionMaxLength)]],
      privacy: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.topicMaxLength)]],
      topic: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.topicMaxLength)]]
    });
  }

  form(name) {
    return this.expertContentForm.controls[name];
  }

  get contentId() {
    return this.expertContentForm.controls['contentId'] as FormControl;
  }

  setimageFile(event) {
    if (!event) {
      this.imageFile = null;
      this.profilePicURL = '';
      this.thumbnailUrl = '';
      return;
    }
    // switch (event.type) {
    //   case 1:
    //     this.contentType = this.getUpdatedTypes([1, 3]);
    //     break;
    //   case 2:
    //     this.contentType = this.getUpdatedTypes([2]);

    //     break;
    //   // case 3:
    //   //   this.contentType = this.getUpdatedTypes([4]);

    //   //   break;

    //   default:
    //     break;
    // }
    event.type === 1 ? this.thumbnailUrl = '' : this.profilePicURL = '';
    this.imageFile = event;
    this.allowedTypes = event.type == 2 ? [2] : [1, 3];

  }

  getUpdatedTypes(validTypes: number[]) {
    return EXPERT_CONTENT_TYPE.map(type => {
      if (validTypes.includes(type.value)) {
        type.disabled = false;
      } else {
        type.disabled = true;

      }
      return type;
    });
  }


  async onSubmit() {
    if (this.expertContentForm.invalid  || this.expertContentForm.disabled) {
      this.expertContentForm.markAllAsTouched();
      return;
    }
    this.expertContentForm.disable();
    let body = { ...this.expertContentForm.value };
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
    } else if (this.details) {
      if (this.details.mediaType == 1) {
        body['mediaUrl'] = this.profilePicURL;
        body.mediaType = this.details.mediaType;
      }
      if (this.details.mediaType == 2) {
        body['mediaUrl'] = this.details.mediaUrl;
        body['thumbnailUrl'] = this.thumbnailUrl;
        body.mediaType = this.details.mediaType;
      }
    }
    if (!body.mediaUrl) {
      this.expertContentForm.enable();
      this.$fileUploadService.showAlert(requiredMedia);
      return;
    }
    if (this.details && this.details._id) {
      delete body.expertId;
      this.$service.editContent(this.details._id, body).then(
        data => {
          this.expertContentForm.enable();
          this.$utility.success(data.message);
          this.$location.back();

        },
        err => {
          this.expertContentForm.enable();
        }
      );
      return;
    }
    this.$service.addContent(body).then(
      data => {
        this.expertContentForm.enable();
        this.$utility.success(data.message);
        this.$location.back();
      },
      err => {
        this.expertContentForm.enable();
      });
  }

  onCancel() {
    this.$location.back();
  }

  onSelectContent(event: MatSelectChange) {
    if (!this.details && this.imageFile && !this.allowedTypes.includes(event.value)) {
      this.imageFile = null;
      this.profilePicURL = '';
      this.thumbnailUrl = '';
      this.reset++;
    } else if (this.details &&
      (!this.allowedTypes.includes(event.value) || (this.imageFile
        && !this.allowedTypes.includes(event.value)))) {
      this.imageFile = null;
      this.profilePicURL = null;
      this.thumbnailUrl = null;
      this.reset++;

    }
  }

  checkAllowedType(validValues: number[], value: number) {
    return validValues.includes(value)
  }
}
