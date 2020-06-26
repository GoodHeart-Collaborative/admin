import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGratitudeJournalComponent } from './user-gratitude-journal.component';



@NgModule({
  declarations: [UserGratitudeJournalComponent],
  imports: [
    CommonModule
  ],
  exports : [UserGratitudeJournalComponent]
})
export class UserGratitudeJournalModule { }
