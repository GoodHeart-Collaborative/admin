import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploadService } from '../../../../shared/services/file-upload.service';
import { EditProfileService } from '../service/edit-profile.service';
import { onSelectFile } from '../../../../../constant/file-input';
import { invalidImageError, invalidFileSize } from '../../../../../constant/messages';
import { FormService } from '../../../../shared/services/form.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [EditProfileService]
})
export class EditProfileComponent implements OnInit,OnDestroy {
  profilePicURL: string;
  editProfileForm: FormGroup;
  minDateOfBirth = new Date();
  editProfileSubscription: Subscription;
  imageFile;
  profileDetail: any;
  constructor(
    private $editProfileService: EditProfileService,
    private $fileUploadService: FileUploadService,
    private $formBuilder: FormBuilder,
    private $formService: FormService
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
          this.profilePicURL = this.profileDetail.profilePhoto;
        }, err => { }
      );
  }

  /**
   * @description Getting controls of editProfileForm
   * @param name
   */
  getControl(name) {
    return this.editProfileForm.controls[name];
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
        this.$editProfileService.showAlert(invalidImageError());
      } else if (err.size) {
        this.$editProfileService.showAlert(invalidFileSize());
      }
    }
  }

  /**
   * @description First upload the profile picture then edit the profile
   */
  async editProfile() {
    if (this.editProfileForm.invalid) {
       return;
    }
    if (this.imageFile) {
      let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    let body = { profilePhoto: this.profilePicURL, ...this.editProfileForm.value };
    this.editProfileForm.disable();
    this.editProfileSubscription = this.$editProfileService.editProfile(body).subscribe(
      data => {
      },
      err => {
        this.editProfileForm.enable();
      }
    );
  }

  ngOnDestroy() {
    if (this.editProfileSubscription) {
      this.editProfileSubscription.unsubscribe();
    }
  }
}
