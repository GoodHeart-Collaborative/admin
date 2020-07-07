import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryManagementComponent } from './view/add-category-management.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CategoryManagementService } from '../../service/category-management.service';
import { MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddCategoryManagementComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    CustomImageModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule
  ],
  exports: [AddCategoryManagementComponent],
  providers : [CategoryManagementService],
  entryComponents: [AddCategoryManagementComponent]
})
export class AddCategoryManagementModule { }
