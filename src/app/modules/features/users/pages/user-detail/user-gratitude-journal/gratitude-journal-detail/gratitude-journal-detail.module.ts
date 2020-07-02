import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GratitudeJournalDetailComponent } from './gratitude-journal-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: GratitudeJournalDetailComponent
  }
];

@NgModule({
  declarations: [GratitudeJournalDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports : [GratitudeJournalDetailComponent]
})
export class GratitudeJournalDetailModule { }
