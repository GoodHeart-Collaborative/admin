import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoutoutsListingComponent } from './view/shoutouts-listing.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';



@NgModule({
  declarations: [ShoutoutsListingComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule
  ],
  exports: [ShoutoutsListingComponent]
})
export class ShoutoutsListingModule { }
