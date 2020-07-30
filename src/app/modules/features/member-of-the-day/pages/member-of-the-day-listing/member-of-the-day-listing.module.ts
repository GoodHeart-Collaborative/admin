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
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';

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
    ReactiveFormsModule,
    LikeActionModule,
    CustomImageModule,
    ViewFullImageModule
  ],
  entryComponents: [ListingFilterComponent,]
})
export class MemberOfTheDayListingModule { }
