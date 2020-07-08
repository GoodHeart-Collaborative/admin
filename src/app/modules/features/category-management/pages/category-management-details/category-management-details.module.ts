import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementDetailsComponent } from './view/category-management-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '' ,  component:CategoryManagementDetailsComponent },
];

@NgModule({
  declarations: [CategoryManagementDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [CategoryManagementDetailsComponent]
})
export class CategoryManagementDetailsModule { }
