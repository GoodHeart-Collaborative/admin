import { Component, OnInit, Inject } from '@angular/core';
import { ChangePasswordService } from '../service/change-password.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../../shared/services/form.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [ChangePasswordService]
})
export class ChangePasswordComponent implements OnInit {

  hideConfirmPassword = true;
  hidePassword = true;
  changePasswordForm: FormGroup;

  constructor(
    private $changePasswordService: ChangePasswordService,
    private $formBuilder: FormBuilder,
    private $formService: FormService,
    private $dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.changePasswordForm = this.$formBuilder.group(
      {
        oldPassword: this.$formService.getControl('password'),
        password: this.$formService.getControl('password'),
        confirmPassword: this.$formService.getControl('password'),
      },
      {
        validator: this.$formService.matchPassword
      }
    );
  }

  /**
   * @description Getting controls of changePasswordForm
   * @param name
   */
  getControl(name) {
    return this.changePasswordForm.controls[name];
  }


  changePassword() {
    if (this.changePasswordForm.invalid) {
      return;
    }
    let data = {
      oldPassword: this.changePasswordForm.value.oldPassword,
      password: this.changePasswordForm.value.password
    };
    console.log(data);
    this.changePasswordForm.disable();
    this.$changePasswordService.changePassword(data)
      .subscribe(
        response => {
        },
        error => {
          this.changePasswordForm.enable();
        }
      );

  }

  onCloseHandler() {
    this.$dialogRef.close();
  }

}
