import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { CategoryManagementService } from '../../../service/category-management.service';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { onSelectFile } from 'src/app/constant/file-input';
import { invalidImageError, invalidFileSize } from 'src/app/constant/messages';

@Component({
  selector: 'app-add-category-management',
  templateUrl: './add-category-management.component.html',
  styleUrls: ['./add-category-management.component.scss']
})
export class AddCategoryManagementComponent implements OnInit {
  categoryForm: FormGroup;
  profilePicURL: any;
  imageFile: any;
  constructor(private $dialogRef: MatDialogRef<AddCategoryManagementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private $formBuilder: FormBuilder,
              private $formService: FormService,
              private $category: CategoryManagementService,
              private $fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.$formBuilder.group(
      {
        title: this.$formService.getControl('title')
      });
  }


  /**
 * @description This function is called when user change profile pic. Save that file
 * @param event 
 */
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

  /**
   * @description First upload the profile picture then edit the profile
   */
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
    this.$category.addCategory(body).then(
      data => {
      },
      err => {
        this.categoryForm.enable();
      }
    );
  }


 /**
   * @description Getting Admin Profile Detail
   */
  getProfileDetail() {
    this.categoryForm.patchValue({
            name: this.data.name
          });
    this.profilePicURL = this.data.imageUrl;
}

  onCancel() {
    this.$dialogRef.close();
  }



}
