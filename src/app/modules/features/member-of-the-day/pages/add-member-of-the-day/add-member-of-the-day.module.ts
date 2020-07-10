import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberOfTheDayComponent } from './view/add-member-of-the-day.component';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [AddMemberOfTheDayComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [AddMemberOfTheDayComponent],
  entryComponents: [AddMemberOfTheDayComponent],

})
export class AddMemberOfTheDayModule { }
