import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListingComponent } from './view/notification-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { ListingFilterComponent } from '../notification-listing/component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatOptionModule } from '@angular/material';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationListingComponent
  }
];


@NgModule({
  declarations: [NotificationListingComponent , ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    ViewFullImageModule,
    CustomImageModule
  ],
  entryComponents: [ListingFilterComponent]
})
export class NotificationListingModule { }
