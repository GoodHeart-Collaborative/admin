import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploadService } from '../../../../shared/services/file-upload.service';
import { EditProfileService } from '../service/edit-profile.service';
import { FormService } from '../../../../shared/services/form.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [EditProfileService]
})
export class EditProfileComponent implements OnInit,OnDestroy {
  profilePicURL: string;
  imageFile;
  editProfileForm: FormGroup;
  minDateOfBirth = new Date();
  editProfileSubscription: Subscription;
  profileDetail: any;
  constructor(
    private $editProfileService: EditProfileService,
    private $fileUploadService: FileUploadService,
    private $formBuilder: FormBuilder,
    private $formService: FormService,
    private $dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = {},
  ) { }

  ngOnInit() {
    this.createForm();
    this.getProfileDetail();
  }

  createForm() {
    this.editProfileForm = this.$formBuilder.group(
      {
        name: this.$formService.getControl('name')
      });
  }

  /**
   * @description Getting Admin Profile Detail
   */
  getProfileDetail() {
    this.$editProfileService.getProfileDetail()
      .subscribe(
        (response: any) => {
          this.profileDetail = response.data;
          this.editProfileForm.patchValue({
            name: this.profileDetail.name
          });
          this.profilePicURL = this.profileDetail.profilePicture;
        }, err => { }
      );
  }

  /**
   *  set Image File in editProfileForm
   * 
   */

 setimageFile(event) {
  if (!event) {
    this.imageFile = null;
    this.profilePicURL = '';
    return;
  }
  this.imageFile = event;
 }

  /**
   * @description Getting controls of editProfileForm
   * @param name
   */
  getControl(name) {
    return this.editProfileForm.controls[name];
  }

  /**
   * @description First upload the profile picture then edit the profile
   */
  async editProfile() {
    console.log(this.editProfileForm);
    if (this.editProfileForm.invalid) {
       return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    let body = { profilePicture: this.profilePicURL, ...this.editProfileForm.value };
    this.editProfileForm.disable();
    this.editProfileSubscription = this.$editProfileService.editProfile(body).subscribe(
      data => {
        this.$dialogRef.close();
      },
      err => {
        this.editProfileForm.enable();
      }
    );
  }

  onCancel() {
    this.$dialogRef.close();
  }

  ngOnDestroy() {
    if (this.editProfileSubscription) {
      this.editProfileSubscription.unsubscribe();
    }
  }

}
