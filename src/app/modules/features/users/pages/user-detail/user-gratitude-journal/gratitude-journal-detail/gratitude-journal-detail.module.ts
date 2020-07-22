import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GratitudeJournalDetailComponent } from './gratitude-journal-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';

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
    TimePipeModule
  ],
  exports : [GratitudeJournalDetailComponent],
})
export class GratitudeJournalDetailModule { }
