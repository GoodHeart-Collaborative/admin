import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoutoutsListingComponent } from './view/shoutouts-listing.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { ListingFilterComponent } from './component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';



@NgModule({
  declarations: [ShoutoutsListingComponent,ListingFilterComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    ViewFullImageModule
  ],
  exports: [ShoutoutsListingComponent],
  entryComponents: [ListingFilterComponent]
})
export class ShoutoutsListingModule { }
