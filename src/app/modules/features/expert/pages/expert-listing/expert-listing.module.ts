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
    MatSelectModule
  ],
  entryComponents: [ListingFilterComponent]
})
export class ExpertListingModule { }
