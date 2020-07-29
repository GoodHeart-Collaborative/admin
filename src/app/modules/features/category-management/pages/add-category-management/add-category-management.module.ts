import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryManagementComponent } from './view/add-category-management.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CategoryManagementService } from '../../service/category-management.service';
import { MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadModule } from 'src/app/modules/shared/image-upload/image-upload.module';

const routes: Routes = [
  {path: '' ,
   component: AddCategoryManagementComponent},
];

@NgModule({
  declarations: [AddCategoryManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIconModule,
    CustomImageModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    WhiteSpaceModule,
    ImageUploadModule,
  
  ],
  providers : [CategoryManagementService],
})
export class AddCategoryManagementModule { }
