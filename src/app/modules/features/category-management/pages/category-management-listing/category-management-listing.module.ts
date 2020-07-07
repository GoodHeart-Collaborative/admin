import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementListingComponent } from './view/category-management-listing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , component: CategoryManagementListingComponent}
];


@NgModule({
  declarations: [CategoryManagementListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class CategoryManagementListingModule { }
