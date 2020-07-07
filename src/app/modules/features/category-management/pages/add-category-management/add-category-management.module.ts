import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryManagementComponent } from './view/add-category-management.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CategoryManagementService } from '../../service/category-management.service';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [AddCategoryManagementComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [AddCategoryManagementComponent],
  providers : [CategoryManagementService],

  entryComponents: [AddCategoryManagementComponent]
})
export class AddCategoryManagementModule { }
