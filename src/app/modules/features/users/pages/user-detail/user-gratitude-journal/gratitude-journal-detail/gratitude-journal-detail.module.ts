import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GratitudeJournalDetailComponent } from './gratitude-journal-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';
import { CommentsShowModule } from 'src/app/modules/shared/comments-show/comments-show.module';

const routes: Routes = [
  {
    path: '',
    component: GratitudeJournalDetailComponent
  }
];

@NgModule({
  declarations: [GratitudeJournalDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LikeActionModule,
    CustomImageModule,
    TimePipeModule,
    CommentsShowModule
  ],
  exports : [GratitudeJournalDetailComponent],
})
export class GratitudeJournalDetailModule { }
