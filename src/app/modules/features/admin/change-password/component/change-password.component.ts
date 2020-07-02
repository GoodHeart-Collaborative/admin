import { Component, OnInit, Inject } from '@angular/core';
import { ChangePasswordService } from '../service/change-password.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../../shared/services/form.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

export type passwrodTypes = {
  ['uppercase']: RegExp,
  ['lowercase']?: RegExp
}
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
  pattersForPassword: passwrodTypes = {
    ['uppercase']: new RegExp('(?=.*[A-Z])'),
    ['lowercase']: new RegExp('(?=.*[a-z])'),

  }
  hint = 'Password must contain an uppercase, a lowercase letter, one numeric value and a special character';
  constructor(
    private $changePasswordService: ChangePasswordService,
    private $formBuilder: FormBuilder,
    private $formService: FormService,
    private $utility: UtilityService,
    private $dialogRef: MatDialogRef<ChangePasswordComponent>,
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
    this.changePasswordForm.disable();
    this.$changePasswordService.changePassword(data).subscribe((res) => {

      this.onCloseHandler();
      this.$utility.success(res.message);
    }, err => {
      this.changePasswordForm.enable();
    });
  }

  onCloseHandler() {
    this.$dialogRef.close();
  }

  checkValue(type: keyof passwrodTypes, controlName: string) {

    console.log(this.pattersForPassword);
    return this.pattersForPassword[type].test(this.getControl(controlName).value);

  }

}
