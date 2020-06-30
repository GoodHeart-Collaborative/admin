import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { PopupComponent } from '../components/popup.component';

@Injectable()
export class PopupService {

  constructor(private snackBar: MatSnackBar) {
    // this.warn('Warning Error');
  }
  open(message: string, type: 'WARNING' | 'ERROR' | 'SUCCESS' | 'DEFAULT' = 'DEFAULT', config: MatSnackBarConfig = {}) {
    this.snackBar.openFromComponent(PopupComponent, {
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
}
