import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from '../../../service/category-management.service';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { CATEGORY } from 'src/app/constant/routes';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import {  categoryRequiredProfilePic } from 'src/app/constant/messages';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { CATEGORY_TYPE } from 'src/app/constant/app-constant';
@Component({
  selector: 'app-add-category-management',
  templateUrl: './add-category-management.component.html',
  styleUrls: ['./add-category-management.component.scss']
})
export class AddCategoryManagementComponent implements OnInit {
  categoryForm: FormGroup;
  profilePicURL: string;
  imageFile: any;
  titleMaxLength = VALIDATION_CRITERIA.categorytitleMaxLength;
  categoryId: string;
  constructor(
    private $formBuilder: FormBuilder,
    private $category: CategoryManagementService,
    private $fileUploadService: FileUploadService,
    private $router: Router,
    $activateRoute: ActivatedRoute,
    private $breadcrumb: BreadcrumbService,
    private $utility: UtilityService,
    private $confirmBox: ConfirmBoxService,
  ) {
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
        this.$breadcrumb.replace(this.categoryId, categoryDetails['title']);
        this.categoryForm.patchValue({
          title: categoryDetails['title']
        });
        
        this.categoryForm.get('title').disable();
        this.profilePicURL = categoryDetails['imageUrl'];
      }
    });
  }

  createForm() {
    this.categoryForm = this.$formBuilder.group(
      {
        title: ['', [Validators.required,
        Validators.minLength(VALIDATION_CRITERIA.categorytitleMinLength),
        Validators.maxLength(VALIDATION_CRITERIA.categorytitleMaxLength)]],
        type: CATEGORY_TYPE.OTHER_CATEGORY
      },
      );
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
    if (this.categoryForm.invalid || this.categoryForm.disabled) {
      this.categoryForm.markAllAsTouched();
      return;
    }
    this.categoryForm.disable();
    this.$confirmBox.confirmCategoryAction(this.title.value, this.categoryId ? 'Edit' : 'Create')
      .subscribe(async (confirm) => {
        if (!confirm) {
              return;
        }
        if (this.imageFile) {
          let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
          this.profilePicURL = data.Location;
        }
        if (!this.profilePicURL) {
          this.categoryForm.enable();
          this.$fileUploadService.showAlert(categoryRequiredProfilePic);
          return;
        }
        let body = { imageUrl: this.profilePicURL, ...this.categoryForm.value };
        console.log(body);
        
        if (this.categoryId) {
          if(body.type){
            delete body.type;
          }
          console.log(body);
          this.$category.editCategory(this.categoryId, body).then(
            data => {
              this.categoryForm.enable();
              this.$utility.success(data.message);
              this.$router.navigate([CATEGORY.fullUrl]);
            },
            err => {
              console.log(err);
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
      })

  }


  onCancel() {
    this.$router.navigate([CATEGORY.fullUrl]);
  }



}
