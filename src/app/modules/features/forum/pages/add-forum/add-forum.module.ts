import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddForumComponent } from './view/add-forum.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'src/app/modules/shared/image-upload/image-upload.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: AddForumComponent
  }
];

@NgModule({
  declarations: [AddForumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ImageUploadModule,
    WhiteSpaceModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule
  ]
})
export class AddForumModule { }
