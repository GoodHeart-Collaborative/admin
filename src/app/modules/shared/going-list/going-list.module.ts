import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoingListComponent } from './view/going-list.component';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [GoingListComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [GoingListComponent]
})
export class GoingListModule { }
