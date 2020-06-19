import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { UtilityService } from '../../../shared/services/utility.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { LOGIN } from 'src/app/constant/urls';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

    constructor(
        private _http: HttpService,
        private _utilityService: UtilityService,
        private _router: Router,
    ) {
    }

    /*
        Method For Calling Login API
    */
    login(data) {
        data = this._utilityService.trim(data);
        return this._http.post(LOGIN, data).pipe(
            tap(
                response => this.loginSuccess(response.data)
            ),
            catchError(
                err => throwError(err)
            )
        );
    }

    /*
        Method For Login
    */
    loginSuccess(data) {
        this._utilityService.setAuthToken(data['accessToken']);
        this._router.navigate(['']);
    }
}
