import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GratitudeFeedListingComponent } from './view/gratitude-feed-listing.component';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { TableModule } from 'src/app/modules/commonTable/table';
import { ListingFilterComponent } from '../gratitude-feed-listing/component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';



@NgModule({
  declarations: [GratitudeFeedListingComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    ViewFullImageModule,
    CustomImageModule
  ],
  exports: [GratitudeFeedListingComponent],
  entryComponents: [ListingFilterComponent]

})
export class GratitudeFeedListingModule { }
