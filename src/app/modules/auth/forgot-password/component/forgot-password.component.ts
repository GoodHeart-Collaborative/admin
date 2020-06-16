import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ForgotPasswordService } from '../service/forgot-password.service';
import { POPUP_MESSAGES } from '../../../../constant/messages';
import { FormService } from '../../../shared/services/form.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['../../login/component/login.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    forgotForm: FormGroup;
    logo = 'assets/images/dummy-logo.png';
    showSpinner = false;
    title = POPUP_MESSAGES.forgotPasswordTitle;

    constructor(
        private _forgotPasswordService: ForgotPasswordService,
        private _formBuilder: FormBuilder,
        private _formService: FormService
    ) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.forgotForm = this._formBuilder.group(
            { email: this._formService.getControl('email') }
        );
    }

    getControl(control) {
        return this.forgotForm.controls[control];
    }

    /*
         Method For Calling Validating Email
    */
    validateEmail() {
        if (this.forgotForm.invalid || this.forgotForm.disabled) {
            return;
        }
        const data = { ...this.forgotForm.value };
        this.forgotForm.disable();
        this._forgotPasswordService.validateEmail(data)
            .subscribe(
                response => {
                },
                err => {
                    this.forgotForm.enable();
                }
            );
    }
}
