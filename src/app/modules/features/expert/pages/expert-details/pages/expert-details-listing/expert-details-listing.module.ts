import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertDetailsListingComponent } from './view/expert-details-listing.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';



@NgModule({
  declarations: [ExpertDetailsListingComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule,
    // DateFilterModule
  ],
  exports :[ExpertDetailsListingComponent]
})
export class ExpertDetailsListingModule { }
