import { Injectable, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  POPUP_MESSAGES,
  SOMETHING_WENT_WRONG,
} from '../../../constant/messages';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IPopupResponse, IPopupData } from '../../../models/common-models';
import { ComponentType } from 'aws-sdk/clients/imagebuilder';

@Injectable()
export class UtilityService {
  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}
  clearStorage() {
    localStorage.removeItem(environment.tokenKey);
  }
  getAuthToken() {
    return localStorage.getItem(environment.tokenKey);
  }
  setAuthToken(token) {
    localStorage.setItem(environment.tokenKey, token);
  }
  showAlert(message, type?) {
    this._snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
  trim(data) {
    for (const item in data) {
      if (typeof data[item] === 'string') {
        data[item] = data[item].trim();
      }
    }
    return data;
  }
  errorAlert(error) {
    let data: IPopupData = {
      title: '',
      message:
        error && error.error && error.error.message
          ? error.error.message
          : SOMETHING_WENT_WRONG,
      confirmButtonText: POPUP_MESSAGES.close,
      hideCancelButton: true,
    };
    this.openDialog(data).subscribe((success) => {});
  }
  openDialog(data: IPopupData): Observable<IPopupResponse> {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '500px',
      data: data,
    });
    return dialogRef.afterClosed();
  }

  parseDateToTimeStamp(obj: any) {
    const newValueInstance = Object.assign({}, obj);
    (function isEmpty(data: any): boolean {
      if (typeof data === 'object' && data !== null) {
        if (Array.isArray(data)) {
          data.forEach((item: any, index: number) => {
            if (isEmpty(item)) {
              data.splice(index, 1);
            }
          });
        } else {
          Object.keys(data).map((key, index) => {
            // console.log(data[key] instanceof Date);
            if (data[key] instanceof Date) {
              data[key] = new Date(data[key]).toISOString();
            }
          });
        }
      }
      return data;
    })(newValueInstance);

    return newValueInstance;
  }
}
