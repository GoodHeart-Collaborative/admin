import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from '../../../service/category-management.service';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { onSelectFile } from 'src/app/constant/file-input';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';
import {VALIDATION_CRITERIA} from 'src/app/constant/validation-criteria';
@Component({
  selector: 'app-add-category-management',
  templateUrl: './add-category-management.component.html',
  styleUrls: ['./add-category-management.component.scss']
})
export class AddCategoryManagementComponent implements OnInit {
  categoryForm: FormGroup;
  profilePicURL: any;
  imageFile: any;
  titleMaxLength = VALIDATION_CRITERIA.titleMaxLength;
  constructor(private $dialogRef: MatDialogRef<AddCategoryManagementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private $formBuilder: FormBuilder,
              private $category: CategoryManagementService,
              private $fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.createForm();
    if (this.data) {
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


  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.profilePicURL = result.url;
    } catch (err) {
      if (err.type) {
        this.$category.showAlert(invalidImageError());
      } else if (err.size) {
        this.$category.showAlert(invalidFileSize());
      }
    }
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
    if (this.data && this.data._id) {
      this.$category.editCategory(this.data._id, body).then(
        data => {
          this.categoryForm.enable();
          this.$dialogRef.close(data);
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
        this.$dialogRef.close(data);
      },
      err => {
        this.categoryForm.enable();
      }
    );
  }



  getCategoryDetail() {
    this.categoryForm.patchValue({
            title: this.data.title
          });
    this.profilePicURL = this.data.imageUrl;
}

  onCancel() {
    this.$dialogRef.close();
  }



}
