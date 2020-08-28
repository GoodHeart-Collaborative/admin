import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyUnicornHumourDetailsComponent } from './view/daily-unicorn-humour-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsShowModule } from 'src/app/modules/shared/comments-show/comments-show.module';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: DailyUnicornHumourDetailsComponent
  }
];

@NgModule({
  declarations: [DailyUnicornHumourDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatIconModule,
    CustomImageModule,
    LikeActionModule,
    CommentsShowModule,
    DateTimePipeModule
  ],

  exports: [DailyUnicornHumourDetailsComponent]
})
export class DailyUnicormHumourDetailsModule { }
