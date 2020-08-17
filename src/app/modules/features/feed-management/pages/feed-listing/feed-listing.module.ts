import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedListingComponent } from './view/feed-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { ForumListingComponent } from '../../../forum/pages/forum-listing/view/forum-listing.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { ListingFilterComponent } from '../feed-listing/component/listing-filter.component';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FeedListingComponent
  }
];

@NgModule({
  declarations: [FeedListingComponent , ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  entryComponents : [ListingFilterComponent]
})
export class FeedListingModule { }
