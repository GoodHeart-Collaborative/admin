import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertDetailsListingComponent } from './view/expert-details-listing.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { ListingFilterComponent } from '../../pages/expert-details-listing/component/listing-filter.component';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/constant/format-datepicker';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';



@NgModule({
  declarations: [ExpertDetailsListingComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule,
    DateFilterModule
  ],
  exports : [ExpertDetailsListingComponent],
  entryComponents: [ListingFilterComponent],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class ExpertDetailsListingModule { }
