import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { FormService } from '../../../shared/services/form.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    hide = true;
    loginForm: FormGroup;

    constructor(
        private _loginService: LoginService, 
        private _formBuilder: FormBuilder,
        private _formService:FormService
    ) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.loginForm = this._formBuilder.group(
            {
                email: this._formService.getControl('email'),
                password: this._formService.getControl('password'),
                deviceToken: [this.attachDeviceID().toString()],
                deviceId: [this.attachDeviceID().toString()],
            }
        );
    }

    getControl(control) {
        return this.loginForm.controls[control];
    }

    attachDeviceID() {
        return Date.now() + Math.floor(Math.random() * 1000000) + 1;
      }
    /*
         Method For Calling Login API
    */
    login() {
        if (this.loginForm.invalid) {
            return;
        }
        const data = { ...this.loginForm.value };
        this.loginForm.disable();
        this._loginService.login(data).subscribe(
            response => {
            },
            err => {
                this.loginForm.enable();
            }
        );
    }
}
