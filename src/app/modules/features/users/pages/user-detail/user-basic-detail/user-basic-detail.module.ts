import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBasicDetailComponent } from './user-basic-detail.component';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';



@NgModule({
  declarations: [UserBasicDetailComponent],
  imports: [
    CommonModule,
    CustomDatePipeModule
  ],
  exports: [UserBasicDetailComponent]
})
export class UserBasicDetailModule { }
