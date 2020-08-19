import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GratitudeFeedListingComponent } from './view/gratitude-feed-listing.component';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { TableModule } from 'src/app/modules/commonTable/table';



@NgModule({
  declarations: [GratitudeFeedListingComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule
  ],
  exports: [GratitudeFeedListingComponent]
})
export class GratitudeFeedListingModule { }
