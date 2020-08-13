import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumListingComponent } from './view/forum-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ListingFilterComponent } from '../../pages/forum-listing/component/listing-filter.component';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ForumListingComponent
  }
];

@NgModule({
  declarations: [ForumListingComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents: [ListingFilterComponent]
})
export class ForumListingModule { }
