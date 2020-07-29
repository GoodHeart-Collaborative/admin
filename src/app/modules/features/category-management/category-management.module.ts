import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementRoutingModule } from './category-management-routing.module';
import { CategoryManagementService, CategoryManagementServiceResolve } from './service/category-management.service';


@NgModule({
  imports: [
    CommonModule,
    CategoryManagementRoutingModule,
  ],
  providers: [CategoryManagementService, CategoryManagementServiceResolve]
})
export class CategoryManagementModule { }
