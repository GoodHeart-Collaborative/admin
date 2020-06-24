import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordService } from '../service/reset-password.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../../shared/services/form.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['../../auth.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    passwordHide = true;
    logo = 'assets/images/dummy-logo.png';
    confirmPasswordHide = true;
    token: String;
    resetForm: FormGroup;

    constructor(
        private _accountService: ResetPasswordService,
        private _route: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _formService: FormService
    ) {
        this.token = this._route.snapshot.params.token;
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.resetForm = this._formBuilder.group(
            {
                password: this._formService.getControl('password'),
                confirmPassword: this._formService.getControl('password')
            },
            {
                validator: this._formService.matchPassword
            }
        );
    }

    getControl(control) {
        return this.resetForm.controls[control];
    }

    resetPassword() {
        if (this.resetForm.invalid || this.resetForm.disabled) {
            return;
        }
        let data = { ...this.resetForm.value };
        this.resetForm.disable();
        data['token'] = this.token;
        delete data['resetPassword'];
        this._accountService.resetPassword(data)
            .subscribe(
                response => {
                },
                err => {
                    this.resetForm.enable();
                }
            );
    }

}
