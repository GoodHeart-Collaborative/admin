import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGratitudeJournalComponent } from './user-gratitude-journal.component';
import { GratitudeJournalDetailModule } from './gratitude-journal-detail/gratitude-journal-detail.module';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { UsersService } from '../../../service/users.service';
import { ListingFilterComponent } from './component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';


@NgModule({
  declarations: [UserGratitudeJournalComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    MatSelectModule,
    ReactiveFormsModule,
    LikeActionModule,
    CommentsModule
  ],
  providers: [UsersService],
  exports : [UserGratitudeJournalComponent],
  entryComponents: [ListingFilterComponent]
})
export class UserGratitudeJournalModule { }
