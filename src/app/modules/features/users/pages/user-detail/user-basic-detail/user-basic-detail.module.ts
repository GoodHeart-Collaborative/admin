import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBasicDetailComponent } from './user-basic-detail.component';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { SliderModule } from 'src/app/modules/shared/slider/slider.module';



@NgModule({
  declarations: [UserBasicDetailComponent],
  imports: [
    CommonModule,
    CustomDatePipeModule,
    MatButtonModule,
    CustomImageModule,
    ViewFullImageModule,
    SliderModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [UserBasicDetailComponent]
})
export class UserBasicDetailModule { }
