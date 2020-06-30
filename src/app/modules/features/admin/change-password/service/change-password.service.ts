import { Injectable } from '@angular/core';
import { UtilityService } from '../../../../shared/services/utility.service';
import { CHANGE_PASSWORD } from '../../../../../constant/urls';
import { HttpService } from '../../../../shared/services/http.service';
import { throwError } from 'rxjs';
import { POPUP_MESSAGES } from '../../../../../constant/messages';
import { FormBuilder } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SETTINGS } from '../../../../../constant/routes';

@Injectable()
export class ChangePasswordService {
    constructor(
        private $utilityService: UtilityService,
        private http: HttpService,
        private $router: Router,
    ) { }

    /**
     * @description Changing Password , After that Redirect To Setting Page
     * @param data
     */
   async changePassword(data) {
        const msg = await this.http.post(CHANGE_PASSWORD, data).toPromise();
        this.$utilityService.success(msg.message);
        return msg;
        // .pipe(
        //     map(
        //         response => {
        //             if (response['statusCode'] === 200) {
        //                 this.$utilityService.showAlert(POPUP_MESSAGES['passwordChanged']);
        //                 this.$router.navigate([SETTINGS.fullUrl]);
        //             }
        //         }
        //     ),
        //     catchError(
        //         error => {
        //             return throwError(error);
        //         }
        //     )
        // ).
        // subscribe();
    }
} 
