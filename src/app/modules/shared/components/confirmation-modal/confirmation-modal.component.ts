import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPopupData, IPopupResponse } from '../../../../models/common-models';
import { POPUP_MESSAGES } from '../../../../constant/messages';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  modalData: IPopupData = {
    title: POPUP_MESSAGES.confrim,
    message: '',
    confirmButtonText: POPUP_MESSAGES.yes,
    cancelButtonText: POPUP_MESSAGES.no
  };
  reason: string;
  responseData: IPopupResponse = {
    note: ''
  };

  constructor(
    private dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: IPopupData
  ) {
    this.modalData = { ...this.modalData, ...this.data };
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm() {
    if (this.modalData && this.reason && this.reason.trim() == '')
      return;
  }
}
