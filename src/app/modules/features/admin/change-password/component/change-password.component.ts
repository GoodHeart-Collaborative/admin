import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from '../service/change-password.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../../shared/services/form.service';
import { PATTERN } from '../../../../../constant/patterns';
import { VALIDATION_CRITERIA } from '../../../../../constant/validation-criteria';

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
    private _changePasswordService: ChangePasswordService,
    private _formBuilder: FormBuilder,
    private _formService: FormService
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.changePasswordForm = this._formBuilder.group(
      {
        oldPassword: this._formService.getControl('password'),
        password: this._formService.getControl('password'),
        confirmPassword: this._formService.getControl('password'),
      },
      {
        validator: this._formService.matchPassword
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
    if (this.changePasswordForm.valid || this.changePasswordForm.disabled) {
      let data = {
        oldPassword: this.changePasswordForm.value.oldPassword,
        newPassword: this.changePasswordForm.value.password
      };
      this.changePasswordForm.disable();
      this._changePasswordService.changePassword(data)
        .subscribe(
          response => {
          },
          error => {
            this.changePasswordForm.enable();
          }
        );
    }
  }

}
