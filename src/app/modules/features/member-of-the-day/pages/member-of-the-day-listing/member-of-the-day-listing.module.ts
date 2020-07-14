import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberOfTheDayListingComponent } from './view/member-of-the-day-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { AddMemberOfTheDayModule } from '../add-member-of-the-day/add-member-of-the-day.module';
import { AddMemberOfTheDayComponent } from '../add-member-of-the-day/view/add-member-of-the-day.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ListingFilterComponent } from '../member-of-the-day-listing/component/listing-filter.component';

const routes: Routes = [
  {
    path: '',
    component: MemberOfTheDayListingComponent
  }
];

@NgModule({
  declarations: [MemberOfTheDayListingComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AddMemberOfTheDayModule,
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents: [ListingFilterComponent]
})
export class MemberOfTheDayListingModule { }
