import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleManagementListingComponent } from './view/article-management-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ListingFilterComponent } from './component/listing-filter.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleManagementListingComponent
  }
];

@NgModule({
  declarations: [ArticleManagementListingComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
export class ArticleManagementListingModule { }
