import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementRoutingModule } from './category-management-routing.module';
import { CategoryManagementComponent } from './view/category-management.component';
import { CategoryManagementService } from './service/category-management.service';
import { MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    CategoryManagementRoutingModule,
  ],
  providers: [CategoryManagementService]
})
export class CategoryManagementModule { }
