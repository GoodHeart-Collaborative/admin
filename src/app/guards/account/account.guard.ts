import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route,
  CanLoad, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { UtilityService } from '../../modules/shared/services/utility.service';
import { HttpService } from '../../modules/shared/services/http.service';
import { DASHBOARD, LOGIN } from '../../constant/routes';
import { VALIDATE_TOKEN } from '../../constant/urls';

@Injectable()
export class AccountGuard implements CanActivate, CanLoad {
  constructor(
    private _router: Router,
    private _utilityService: UtilityService,
    private _http: HttpService
  ) {

  }

  navigate() {
    this._router.navigate([DASHBOARD.fullUrl]);
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this._utilityService.getAuthToken()) {
      let token = next.params.token;
      if (token) {
        return this.validateResetPasswordToken(token);
      }
      else {
        return true;
      }
    }
    return this.navigate();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    if (!this._utilityService.getAuthToken()) {
      return true;
    }
    return this.navigate();

  }

  validateResetPasswordToken(token) {
    const params = {
      type : 'forget',
      accountLevel: 'admin',
      name: '',
      token
    }
    return new Observable<boolean>((observer) => {

      this._http.get(`${VALIDATE_TOKEN}`, params).subscribe(
        response => {
          observer.next(true);
          observer.complete();
        }, err => {
          // this._router.navigate([LOGIN.fullUrl]);
          // observer.next(false);
          observer.next(true);

          observer.complete();
        }
      )
    });
  }
}
