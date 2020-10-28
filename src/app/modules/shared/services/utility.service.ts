import { Injectable, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import {
  POPUP_MESSAGES,
} from '../../../constant/messages';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IPopupResponse, IPopupData } from '../../../models/common-models';
import { PopupComponent } from '../popup/components/popup.component';

@Injectable()
export class UtilityService {
  dialogRef = 0;
  constructor(
    private dialog: MatDialog,
    private $snackBar: MatSnackBar,
    private $matDailog: MatDialogRef<ConfirmationModalComponent>) { }
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
    this.$snackBar.open(message, 'Close', {
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
    console.log(this.dialogRef);
    if (this.dialogRef) {
      return;
    }
    this.dialogRef = 1;
    let data: IPopupData = {
      title: '',
      message: error,
      confirmButtonText: POPUP_MESSAGES.close,
      hideCancelButton: true,
    };
    this.openDialog(data).subscribe((success) => {
      this.$matDailog.close();
      this.dialogRef = 0;
    });
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
  open(message: string, type: 'WARNING' | 'ERROR' | 'SUCCESS' | 'DEFAULT' = 'DEFAULT', config: MatSnackBarConfig = {}) {
    this.$snackBar.openFromComponent(PopupComponent, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      data: { message, type },
      duration: 3000,
      ...config
    });
  }
  warn(message: string, config: MatSnackBarConfig = {}) {
    this.open(message, 'WARNING', config);
  }
  error(message: string, config: MatSnackBarConfig = {}) {
    this.open(message, 'ERROR', config);
  }
  success(message: string, config: MatSnackBarConfig = {}) {
    this.open(message, 'SUCCESS', config);
  }
  show(message: string, config: MatSnackBarConfig = {}) {
    this.open(message, 'DEFAULT', config);
  }

  countFilter(data) {
    let count = 0;
    for (const k in data) {
      if (data[k] != null && data[k] != '') {
        ++count;
      }
    }
    return count;
  }

  onCloseAll() {
    this.dialog.closeAll();
   }
}
