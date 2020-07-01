import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGratitudeJournalComponent } from './user-gratitude-journal.component';
import { GratitudeJournalDetailModule } from './gratitude-journal-detail/gratitude-journal-detail.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [UserGratitudeJournalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GratitudeJournalDetailModule
  ],
  exports : [UserGratitudeJournalComponent]
})
export class UserGratitudeJournalModule { }
