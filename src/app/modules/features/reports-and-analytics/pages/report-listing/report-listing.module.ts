import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListingComponent } from './view/report-listing.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatSelectModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';



@NgModule({
  declarations: [ReportListingComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    MatSelectModule,
    ReactiveFormsModule,
    CustomImageModule,
    ViewFullImageModule,
    MatDialogModule
  ],
  exports: [ReportListingComponent]
})
export class ReportListingModule { }
