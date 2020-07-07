import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBasicDetailComponent } from './user-basic-detail.component';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [UserBasicDetailComponent],
  imports: [
    CommonModule,
    CustomDatePipeModule,
    MatButtonModule
  ],
  exports: [UserBasicDetailComponent]
})
export class UserBasicDetailModule { }
