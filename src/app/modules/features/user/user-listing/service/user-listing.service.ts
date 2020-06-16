import { Injectable } from "@angular/core";
import { UtilityService } from "../../../../shared/services/utility.service";
import { HttpService } from "../../../../shared/services/http.service";
import { Observable, throwError } from "rxjs";
import { COMMON_MESSAGES } from "../../../../../constant/messages";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  USER,
  HOST_BLOCK,
  HOST_UNBLOCK,
  USER_BLOCK,
  USER_UNBLOCK,
  USER_DELETE,
} from "src/app/constant/urls";
import { FormService } from "src/app/modules/shared/services/form.service";
import { IPopupData } from "../../../../../models/common-models";
import { USER_STATUS_LIST } from "../../../../../constant/app-constant";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class UserListingService {
  constructor(
    private _utilityService: UtilityService,
    private _http: HttpService
  ) {}

  getUserListing(data) {
    return this._http.get<any>(USER, data);
  }

  blockUser(userId) {
    return this._http.put(USER_BLOCK(userId)).pipe(
      map((response) => {
        return response;
      }),
      catchError((err) => throwError(err))
    );
  }

  unblockUser(userId) {
    return this._http.put(USER_UNBLOCK(userId)).pipe(
      map((response) => {
        return response;
      }),
      catchError((err) => throwError(err))
    );
  }

  deleteUser(userId) {
    return this._http.delete(USER_DELETE(userId)).pipe(
      map((response) => {
        return response;
      }),
      catchError((err) => throwError(err))
    );
  }
}
