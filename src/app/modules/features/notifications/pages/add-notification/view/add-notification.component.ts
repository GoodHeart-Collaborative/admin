import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { sentTo } from 'src/app/constant/drawer';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { requiredProfilePic } from 'src/app/constant/messages';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';
import { NOTIFICATIONS } from 'src/app/constant/routes';
import { NotificationsService } from '../../../service/notifications.service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent implements OnInit {
  notificationForm: FormGroup;
  sentTo = sentTo;
  titleNotificationMaxLimit = VALIDATION_CRITERIA.titleNotificationMaxLimit;
  messageNotificationMaxLimit = VALIDATION_CRITERIA.messageNotificationMaxLimit;
  imageFile: any;
  profilePicURL: string;
  constructor(
    private $fb: FormBuilder,
    private $fileUploadService: FileUploadService,
    private $utility: UtilityService,
    private $route: Router,
    private $service: NotificationsService
  ) {
    this.createForm();
  }

  createForm() {
    this.notificationForm = this.$fb.group({
      title: ['', [Validators.required, Validators.maxLength(this.titleNotificationMaxLimit)]],
      // platform: [],
      message: ['', [Validators.required, Validators.maxLength(this.messageNotificationMaxLimit)]]
    });
  }

  form(name) {
    return this.notificationForm.controls[name];
  }

  // setimageFile(event) {
  //   if (!event) {
  //     this.imageFile = null;
  //     this.profilePicURL = '';
  //     return;
  //   }
  //   this.imageFile = event;
  // }

  ngOnInit() {
  }

  async onSubmit() {
    if (this.notificationForm.invalid  || this.notificationForm.disabled) {
      this.notificationForm.markAllAsTouched();
      return;
    }
    // if (this.imageFile) {
    //   let data: any = await this.$fileUploadService.uploadFile(this.imageFile);
    //   this.profilePicURL = data.Location;
    // }
    // if (!this.profilePicURL) {
    //   this.$fileUploadService.showAlert(requiredProfilePic);
    //   return;
    // }
    // let body = { image: this.profilePicURL, ...this.notificationForm.value };
    this.notificationForm.disable();
    let body = { ...this.notificationForm.value };
    this.$service.add(body).then(
      data => {
        this.notificationForm.enable();
        this.$utility.success(data.message);
        this.$route.navigate([NOTIFICATIONS.fullUrl]);

      },
      err => {
        this.notificationForm.enable();
      });
  }

  onCancel() {
    this.$route.navigate([NOTIFICATIONS.fullUrl]);
  }

}
