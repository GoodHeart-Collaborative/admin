import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGratitudeJournalComponent } from './user-gratitude-journal.component';
import { GratitudeJournalDetailModule } from './gratitude-journal-detail/gratitude-journal-detail.module';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { UsersService } from '../../../service/users.service';

const routes: Routes = [
];

@NgModule({
  declarations: [UserGratitudeJournalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule
    
  ],
  providers: [UsersService],
  exports : [UserGratitudeJournalComponent]
})
export class UserGratitudeJournalModule { }
