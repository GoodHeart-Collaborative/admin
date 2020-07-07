import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementListingComponent } from './view/category-management-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { MatIconModule } from '@angular/material';
import { ConfirmBoxModule } from 'src/app/modules/shared/confirm-box';
import { AddCategoryManagementModule } from '../add-category-management/add-category-management.module';

const routes: Routes = [
  {path: '' , component: CategoryManagementListingComponent}
];


@NgModule({
  declarations: [CategoryManagementListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    DateFilterModule,
    CustomDatePipeModule,
    MatIconModule,
    ConfirmBoxModule,
    AddCategoryManagementModule
  ]
})
export class CategoryManagementListingModule { }
