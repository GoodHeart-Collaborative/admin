import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from '../../../service/category-management.service';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { CATEGORY } from 'src/app/constant/routes';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { requiredProfilePic } from 'src/app/constant/messages';
@Component({
  selector: 'app-add-category-management',
  templateUrl: './add-category-management.component.html',
  styleUrls: ['./add-category-management.component.scss']
})
export class AddCategoryManagementComponent implements OnInit {
  categoryForm: FormGroup;
  profilePicURL: string;
  imageFile: any;
  titleMaxLength = VALIDATION_CRITERIA.titleMaxLength;
  categoryId: string;
  constructor(
    private $formBuilder: FormBuilder,
    private $category: CategoryManagementService,
    private $fileUploadService: FileUploadService,
    private $router: Router,
    $activateRoute: ActivatedRoute,
    private $breadcrumb: BreadcrumbService,
    private $utility: UtilityService
  ) {
    console.log($activateRoute.snapshot.params.id);
    this.createForm();
    if ($activateRoute.snapshot.params && $activateRoute.snapshot.params.id) {
      this.categoryId = $activateRoute.snapshot.params.id;
      this.getCategoryHandler();
    }
  }

  ngOnInit() {
  }

  getCategoryHandler() {
    this.$category.onCategoryDetailsHandler(this.categoryId).then(res => {
      if (res && res.data) {
        const categoryDetails = res.data;
        console.log(categoryDetails);
        this.$breadcrumb.replace(this.categoryId, categoryDetails['title']);
        this.categoryForm.patchValue({
          title: categoryDetails['title']
        });
        this.profilePicURL = categoryDetails['imageUrl'];
      }
    });
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
    if (!event) {
      this.imageFile = null;
      this.profilePicURL = '';
      return;
    }
    this.imageFile = event;
  }

  async onSubmit() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    if (!this.profilePicURL) {
      this.$fileUploadService.showAlert(requiredProfilePic);
      return;
    }
    let body = { imageUrl: this.profilePicURL, ...this.categoryForm.value };
    this.categoryForm.disable();
    if (this.categoryId) {
      this.$category.editCategory(this.categoryId, body).then(
        data => {
          this.categoryForm.enable();
          this.$utility.success(data.message);
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
        this.$utility.success(data.message);
        this.$router.navigate([CATEGORY.fullUrl]);
      },
      err => {
        this.categoryForm.enable();
      }
    );
  }


  onCancel() {
    this.$router.navigate([CATEGORY.fullUrl]);
  }



}
