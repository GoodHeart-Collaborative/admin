import {Injectable} from '@angular/core';
import {HttpService} from '../../../shared/services/http.service';
import {POPUP_MESSAGES} from '../../../../constant/messages';
import {UtilityService} from '../../../shared/services/utility.service';
import {Router} from '@angular/router';
import {LOGIN} from '../../../../constant/routes';
import {FORGOT_PASSWORD} from '../../../../constant/urls';
import {tap, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { IPopupData } from '../../../../models/common-models';

@Injectable()
export class ForgotPasswordService {

    constructor(
        private _http: HttpService,
        private _utilityService: UtilityService,
        private _router: Router
    ) { }

    /*
       Method For Validating Forgot Password Email
   */
    validateEmail(data) {
        data = this._utilityService.trim(data);
        return this._http.post(FORGOT_PASSWORD, data).pipe(
            tap(
                response => this.emailValidationSuccess()
            ),
            catchError(
                error => throwError(error)
            )
        );
    }

    /* 
       Method For Showing popup of successfully verifying and sending reset password link
   */
    emailValidationSuccess() {
        let data:IPopupData = {
            title: POPUP_MESSAGES.passwordResetTitle,
            message: POPUP_MESSAGES.passwordResetLink,
            confirmButtonText: POPUP_MESSAGES.close,
            hideCancelButton: true
        };
        this._utilityService.openDialog(data).subscribe(success => {
            this._router.navigate([LOGIN.fullUrl]);
        });
    }
}
