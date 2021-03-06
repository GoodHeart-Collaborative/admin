import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleManagementComponent } from './view/add-article-management.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';
import { MatFormFieldModule, MatIconModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';


const routes: Routes = [
  {
    path: '',
    component: AddArticleManagementComponent
  }
];

@NgModule({
  declarations: [AddArticleManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomImageModule,
    MediaUploadModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    CustomImageModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    WhiteSpaceModule
  ]
})
export class AddArticleManagementModule { }
