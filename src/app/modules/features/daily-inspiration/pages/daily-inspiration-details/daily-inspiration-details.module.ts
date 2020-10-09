import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyInspirationDetailsComponent } from './view/daily-inspiration-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsShowModule } from 'src/app/modules/shared/comments-show/comments-show.module';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';

const routes: Routes = [
  {
    path: '',
    component: DailyInspirationDetailsComponent
  }
];

@NgModule({
  declarations: [DailyInspirationDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomImageModule,
    LikeActionModule,
    CommentsModule,
    DateTimePipeModule,
    ReportProblemModule
  ]
})
export class DailyInspirationDetailsModule { }
