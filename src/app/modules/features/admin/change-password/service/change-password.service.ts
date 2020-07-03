import { Injectable } from '@angular/core';
import { UtilityService } from '../../../../shared/services/utility.service';
import { CHANGE_PASSWORD } from '../../../../../constant/urls';
import { HttpService } from '../../../../shared/services/http.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
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
    changePassword(data) {
        return  this.http.post(CHANGE_PASSWORD, data);
        // this.$utilityService.success(msg.message);
        // return msg;
    }
}

