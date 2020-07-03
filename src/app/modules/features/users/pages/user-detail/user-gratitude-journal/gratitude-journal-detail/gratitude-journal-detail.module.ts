import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GratitudeJournalDetailComponent } from './gratitude-journal-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';

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
    LikeActionModule
  ],
  exports : [GratitudeJournalDetailComponent],
})
export class GratitudeJournalDetailModule { }
