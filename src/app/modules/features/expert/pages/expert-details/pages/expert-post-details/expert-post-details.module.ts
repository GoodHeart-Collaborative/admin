import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertPostDetailsComponent } from './view/expert-post-details.component';
import { MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { CommentsShowModule } from 'src/app/modules/shared/comments-show/comments-show.module';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: ExpertPostDetailsComponent
  },

];

@NgModule({
  declarations: [ExpertPostDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CustomImageModule,
    CommentsShowModule,
    LikeActionModule,
    ReportProblemModule,
    DateTimePipeModule
  ]
})
export class ExpertPostDetailsModule { }
