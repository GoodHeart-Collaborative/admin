import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from '../../../service/category-management.service';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import {VALIDATION_CRITERIA} from 'src/app/constant/validation-criteria';
import {CATEGORY} from 'src/app/constant/routes';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
@Component({
  selector: 'app-add-category-management',
  templateUrl: './add-category-management.component.html',
  styleUrls: ['./add-category-management.component.scss']
})
export class AddCategoryManagementComponent implements OnInit {
  categoryForm: FormGroup;
  profilePicURL: any;
  imageFile: any;
  data;
  titleMaxLength = VALIDATION_CRITERIA.titleMaxLength;
  categoryDetails: any;
  constructor(
              private $formBuilder: FormBuilder,
              private $category: CategoryManagementService,
              private $fileUploadService: FileUploadService,
              private $router: Router,
              $activateRoute: ActivatedRoute,
              $breadcrumb: BreadcrumbService
              ) {
                if ($activateRoute.snapshot.data.categoryDetails && $activateRoute.snapshot.data.categoryDetails.data) {
                  this.categoryDetails = $activateRoute.snapshot.data.categoryDetails.data;
                  $breadcrumb.replace(this.categoryDetails._id, this.categoryDetails.title);
                  console.log(this.categoryDetails );
                }
               }

  ngOnInit() {
    this.createForm();
    if (this.categoryDetails && this.categoryDetails._id) {
      this.getCategoryDetail();
    }
  }

  createForm() {
    this.categoryForm = this.$formBuilder.group(
      {
        title: ['', [Validators.required, Validators.minLength(VALIDATION_CRITERIA.titleMinLength)]]
      });
  }

  get title() {
    return this.categoryForm.controls['title'];
  }

  setimageFile(event) {
    this.imageFile = event;
  }

  async onSubmit() {
    if (this.categoryForm.invalid) {
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    let body = { imageUrl: this.profilePicURL, ...this.categoryForm.value };
    this.categoryForm.disable();
    if (this.categoryDetails && this.categoryDetails._id) {
      this.$category.editCategory(this.categoryDetails._id, body).then(
        data => {
          this.categoryForm.enable();
          this.$router.navigate([CATEGORY.fullUrl]);
        },
        err => {
          this.categoryForm.enable();
        }
      );
      return;
    }
    this.$category.addCategory(body).then(
      data => {
        this.categoryForm.enable();
        this.$router.navigate([CATEGORY.fullUrl]);
      },
      err => {
        this.categoryForm.enable();
      }
    );
  }



  getCategoryDetail() {
    console.log(this.categoryDetails);
    
    this.categoryForm.patchValue({
            title: this.categoryDetails.title
          });
    this.profilePicURL = this.categoryDetails.imageUrl;
}

  onCancel() {
    this.$router.navigate([CATEGORY.fullUrl]);
  }



}
