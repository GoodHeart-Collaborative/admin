import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyAdviceDetailsComponent } from './view/daily-advice-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';
import { CommentsShowModule } from 'src/app/modules/shared/comments-show/comments-show.module';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';


const routes: Routes = [
  {
    path: '',
    component: DailyAdviceDetailsComponent
  }
];
@NgModule({
  declarations: [DailyAdviceDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LikeActionModule,
    CustomImageModule,
    TimePipeModule,
    CommentsModule,
    DateTimePipeModule,
    ReportProblemModule
  ],
  providers: [CommonService]
})
export class DailyAdviceDetailsModule { }
