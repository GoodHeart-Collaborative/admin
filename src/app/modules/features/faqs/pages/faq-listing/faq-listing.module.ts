import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsListingComponent } from './view/faqs-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatOptionModule } from '@angular/material';
import { ListingFilterComponent } from '../../component/listing-filter.component';
import { AddFaqsModule } from '../add-faqs/add-faqs.module';

const routes: Routes = [
  {
    path: '',
    component: FaqsListingComponent,
  }
];

@NgModule({
  declarations: [FaqsListingComponent,ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    DateTimePipeModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    AddFaqsModule
  ],
  entryComponents: [ListingFilterComponent]
})
export class FAQListingModule { }
