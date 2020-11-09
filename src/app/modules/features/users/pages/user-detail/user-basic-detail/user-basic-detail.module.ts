import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBasicDetailComponent } from './user-basic-detail.component';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { SliderModule } from 'src/app/modules/shared/slider/slider.module';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';



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
    TimePipeModule,
    ReportProblemModule
  ],
  exports: [UserBasicDetailComponent]
})
export class UserBasicDetailModule { }
