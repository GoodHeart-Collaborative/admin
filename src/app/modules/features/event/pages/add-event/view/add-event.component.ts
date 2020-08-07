import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from 'src/app/modules/features/category-management/service/category-management.service';
import { EventService } from '../../../service/event.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';
import { EVENTS } from 'src/app/constant/routes';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { onSelectFile } from 'src/app/constant/file-input';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  expertForm: FormGroup;
  imageFile: any;
  categoryData: any;
  profilePicURL: any;
  details: any;
  constructor(
    private $fb: FormBuilder,
    private $category: CategoryManagementService,
    private $fileUploadService: FileUploadService,
    private $service: EventService,
    private $utility: UtilityService,
    private $route: Router,

    activateRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.categoryList();
  }

  createForm() {
    this.expertForm = this.$fb.group({
      categoryId: [],
      name: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength)]],
      email: ['',],
      profession: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.professionMaxLength)]],
      industry: [1],
      bio: ['', [Validators.required, Validators.maxLength(VALIDATION_CRITERIA.bioMaxLength)]],
      experience: ['']
    });
  }

  form(name) {
    return this.expertForm.controls[name];
  }

  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.profilePicURL = result.url;
    } catch (err) {
      if (err.type) {
        this.$fileUploadService.showAlert(invalidImageError());
      } else if (err.size) {
        this.$fileUploadService.showAlert(invalidFileSize());
      }
    }
  }

  /**
   * API hit for Category
   */

  categoryList() {
    const params = {
      page: 1,
      limit: 100,
    };
    this.$category.queryData(params).then(res => {
      this.categoryData = res.data['data'];
      console.log(res.data['data']);
    });
  }

  setimageFile(event) {
    if (!event) {
      this.imageFile = null;
      this.profilePicURL = '';
      return;
    }
    this.imageFile = event;
  }

  async onSubmit() {
    if (this.expertForm.invalid) {
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = [data.Location];
    }
    if (!this.profilePicURL) {
        this.$fileUploadService.showAlert('Profile pic is required');
        return;
    }
    let body = { profilePicUrl: this.profilePicURL, ...this.expertForm.value };
    if (this.details && this.details._id) {
      delete body.type;
      // this.$service.edit(this.details._id, body).then(
      //   data => {
      //     this.expertForm.enable();
      //     this.$utility.success(data.message);
      //     this.$route.navigate([EVENTS.fullUrl]);
      //   },
      //   err => {
      //     this.expertForm.enable();
      //   });
      return;
    }
    // this.$service.add(body).then(
    //   data => {
    //     this.expertForm.enable();
    //     this.$utility.success(data.message);

    //     this.$route.navigate([EVENTS.fullUrl]);

    //   },
    //   err => {
    //     this.expertForm.enable();
    //   });
  }

  onCancel() {
    this.$route.navigate([EVENTS.fullUrl]);
  }


}
