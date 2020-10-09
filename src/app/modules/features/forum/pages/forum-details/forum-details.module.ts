import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumDetailsComponent } from './view/forum-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';

const routes: Routes = [
  {
    path: '',
    component: ForumDetailsComponent
  }
];

@NgModule({
  declarations: [ForumDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommentsModule,
    CustomImageModule,
    LikeActionModule,
    ReportProblemModule,
  ]
})
export class ForumDetailsModule { }
