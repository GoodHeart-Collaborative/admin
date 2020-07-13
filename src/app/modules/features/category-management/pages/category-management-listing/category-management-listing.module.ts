import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementListingComponent } from './view/category-management-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { MatIconModule, MatSelectModule, MatOptionModule, MatFormFieldModule } from '@angular/material';
import { ConfirmBoxModule } from 'src/app/modules/shared/confirm-box';
import { AddCategoryManagementModule } from '../add-category-management/add-category-management.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ListingFilterComponent } from './component/listing-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '' ,
   component: CategoryManagementListingComponent},
];


@NgModule({
  declarations: [CategoryManagementListingComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    DateFilterModule,
    CustomDatePipeModule,
    MatIconModule,
    ConfirmBoxModule,
    AddCategoryManagementModule,
    CustomImageModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  entryComponents: [ListingFilterComponent]
})
export class CategoryManagementListingModule { }
