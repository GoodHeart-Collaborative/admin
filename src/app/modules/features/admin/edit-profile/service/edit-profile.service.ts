import { COMMON_MESSAGES } from '../../../../../constant/messages';
import { Injectable } from '@angular/core';
import { HttpService } from '../../../../shared/services/http.service';
import { UtilityService } from '../../../../shared/services/utility.service';
import { EDIT_PROFILE } from '../../../../../constant/urls';
import { throwError } from 'rxjs';
import { DataTransferService } from '../../../../shared/services/data-transfer.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SETTINGS } from '../../../../../constant/routes';

@Injectable()
export class EditProfileService {


  constructor(
    private _http: HttpService,
    private _utilityService: UtilityService,
    private _dataService: DataTransferService,
    private _router: Router
  ) {
  }

  /*
      Method For Edit Profile
  */
  editProfile(data) {
    let body = { ...data };
    delete body['email'];
    return this._http.patch(EDIT_PROFILE, body).pipe(
      tap(
        response => {
          this._utilityService.success(COMMON_MESSAGES.UPDATED('Profile'));
           this._dataService.profileData.data = { ...this._dataService.profileData.data, ...body };
          this._dataService.profileDetail.next({ ...this._dataService.profileData.data });
          this._router.navigate([SETTINGS.fullUrl]);
        }
      ),
      catchError(
        error => {
          this._utilityService.error(error);
          return throwError(error);
        }
      )
    );
  }

  /**
   * @description Getting Admin Profile Detail
   */
  getProfileDetail() {
    return this._dataService.getProfileDetail();
  }

  showAlert(message) {
    this._utilityService.showAlert(message);
  }

}
