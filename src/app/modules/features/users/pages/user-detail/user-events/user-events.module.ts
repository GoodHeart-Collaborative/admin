import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventsComponent } from './user-events.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { TableModule } from 'src/app/modules/commonTable/table';
import { UserEventService } from './service/user-event.service';
import { ListingFilterComponent } from 'src/app/modules/features/users/pages/user-detail/user-events/component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
];

@NgModule({
  declarations: [UserEventsComponent , ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [UserEventsComponent],
  providers: [UserEventService],
  entryComponents: [ListingFilterComponent]
})
export class UserEventsModule { }
