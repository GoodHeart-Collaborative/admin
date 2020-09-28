import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertListingComponent } from './view/expert-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { ListingFilterComponent } from './component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatOptionModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';

const routes: Routes = [
  {
    path: '',
    component: ExpertListingComponent
  }
];

@NgModule({
  declarations: [ExpertListingComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatSelectModule,
    ReportProblemModule,
    ViewFullImageModule,
    CustomImageModule
  ],
  entryComponents: [ListingFilterComponent]
})
export class ExpertListingModule { }
