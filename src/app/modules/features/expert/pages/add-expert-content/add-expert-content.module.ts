import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpertContentComponent } from './view/add-expert-content.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: AddExpertContentComponent
  }
];

@NgModule({
  declarations: [AddExpertContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MediaUploadModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule
  ]
})
export class AddExpertContentModule { }
