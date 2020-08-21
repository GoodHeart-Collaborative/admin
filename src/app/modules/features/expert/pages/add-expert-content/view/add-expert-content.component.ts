import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { EXPERT_DETAILS, EXPERT } from 'src/app/constant/routes';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ExpertService } from '../../../service/expert.service';
import { EXPERT_CONTENT_TYPE, PRAVICY } from 'src/app/constant/drawer';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { requiredMedia } from 'src/app/constant/messages';
import { Location } from '@angular/common';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-add-expert-content',
  templateUrl: './add-expert-content.component.html',
  styleUrls: ['./add-expert-content.component.scss']
})
export class AddExpertContentComponent implements OnInit {
  expertContentForm: FormGroup;
  categoryData: any;
  expertContentId: string;
  contentType = EXPERT_CONTENT_TYPE;
  privacyData = PRAVICY;
  imageFile: any;
  thumbnailUrl: string;
  profilePicURL: string;
  details: any;
  constructor(
    private $fb: FormBuilder,
    private $category: CategoryManagementService,
    $activatedRoute: ActivatedRoute,
    private $service: ExpertService,
    private $utility: UtilityService,
    private $fileUploadService: FileUploadService,
    private $location: Location,
    $breadcrumb: BreadcrumbService
  ) {
    console.log($activatedRoute.snapshot.parent.parent.params.id);
    this.expertContentId = $activatedRoute.snapshot.parent.parent.params.id;
    console.log(this.expertContentId);
    this.createForm();
    if ($activatedRoute.parent.snapshot.data && $activatedRoute.parent.snapshot.data.expertData) {
      this.details = $activatedRoute.parent.snapshot.data.expertData.data[0];
      $breadcrumb.replace(this.details._id, this.details.topic);
      this.patchValueInForm();
    }
  }

  ngOnInit() {
    this.categoryList();
  }

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
      categoryId: [],
      price: [0, [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.priceMaxLength)]],
      contentId: [],
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
    console.log(event);
    if (!event) {
      this.imageFile = null;
      this.profilePicURL = '';
      this.thumbnailUrl = '';
      return;
    }
    console.log(event);
    switch (event.type) {
      case 1:
        this.contentType = this.getUpdatedTypes([1, 3]);
        break;
      case 2:
        this.contentType = this.getUpdatedTypes([2]);

        break;
      case 3:
        this.contentType = this.getUpdatedTypes([4]);

        break;

      default:
        break;
    }
    event.type === 1 ? this.thumbnailUrl = '' : this.profilePicURL = '';
    this.imageFile = event;
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
  /**
   * API hit for Category
   */
  categoryList() {
    const params = {
      page: 1,
      limit: 10,
    };
    this.$category.queryData(params).then(res => {
      this.categoryData = res.data['data'];
    });
  }

  async onSubmit() {
    if (this.expertContentForm.invalid) {
      this.expertContentForm.markAllAsTouched();
      return;
    }
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
    }
    else if (this.details) {
      if (this.details.mediaType == 1) {
        body['mediaUrl'] = this.profilePicURL;
        body.mediaType = this.details.mediaType;
      }
      if (this.details.mediaType == 2) {
        body['thumbnailUrl'] = this.thumbnailUrl;
        body.mediaType = this.details.mediaType;
      }
    }
    if (!body.mediaUrl) {
      this.$fileUploadService.showAlert(requiredMedia);
      return;
    }
    if (this.details && this.details._id) {
      console.log(body);
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
}
