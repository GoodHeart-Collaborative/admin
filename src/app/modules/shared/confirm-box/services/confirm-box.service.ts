import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmBoxComponent } from '../view/confirm-box.component';

@Injectable()
export class ConfirmBoxService {

  constructor(private $dialog: MatDialog) { }
  open(data: {title: string, message: string}) {
    return this.$dialog.open(ConfirmBoxComponent, {
      disableClose: true,
      width: '500px',

      autoFocus: false,
      data
    }).afterClosed();
  }
  listAction(entity: string, action: string) {
    return this.open({
      title: `${action} ${entity}`,
      message: `Are you sure you want to ${action} this ${entity}?`,
    });
  }
  confirmCategoryAction(entity: string) {
    return this.open({
      title: `${entity}`,
      message: `Are you sure you want to create this category ?
       You can't change or edit the name of category once it is created.`,
    });
  }
}
