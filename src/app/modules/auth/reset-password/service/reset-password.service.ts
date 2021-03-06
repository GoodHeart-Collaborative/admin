import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { POPUP_MESSAGES } from '../../../../constant/messages';
import { UtilityService } from '../../../shared/services/utility.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { LOGIN } from '../../../../constant/routes';
import { catchError, tap } from 'rxjs/operators';
import { RESET_PASSWORD } from '../../../../constant/urls';
import { IPopupData } from '../../../../models/common-models';

@Injectable()
export class ResetPasswordService {

    constructor(
        private _http: HttpService,
        private _utilityService: UtilityService,
        private _router: Router,
    ) {
    }

    /*
        Method For Resetting The Password
    */
    resetPassword(data) {
        data = this._utilityService.trim(data);
        const quaryParmas = {
            token: data.token,
            password: data.password
        };
        return this._http.patch(`${RESET_PASSWORD}`, null, quaryParmas).pipe(
            tap(
                response => this.resetPasswordSuccess()
            ),
            catchError(
                   // if (error.error.statusCode === 400) {
                    //     // this._router.navigate([LOGIN.fullUrl]);
                    // }
                    err => throwError(err)
            )
        );
    }

    /* 
       Method For Showing Reset Password Success
   */
    resetPasswordSuccess() {
        let data: IPopupData = {
            title: POPUP_MESSAGES.passwordResetTitle,
            message: POPUP_MESSAGES.passwordChanged,
            confirmButtonText: POPUP_MESSAGES.close,
            hideCancelButton: true
        };
        this._utilityService.openDialog(data).subscribe(success => {
            this._router.navigate([LOGIN.fullUrl]);
        });
    }
}
