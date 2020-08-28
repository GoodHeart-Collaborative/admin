import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListingComponent } from './view/event-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { ListingFilterComponent } from './component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';


const routes: Routes = [
  {
    path: '',
    component: EventListingComponent
  }
];

@NgModule({
  declarations: [EventListingComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    DateTimePipeModule
  ],
  entryComponents: [ListingFilterComponent]
})
export class EventListingModule { }
