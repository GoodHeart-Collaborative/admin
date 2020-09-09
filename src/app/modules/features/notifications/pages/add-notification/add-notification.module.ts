import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotificationComponent } from './view/add-notification.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ImageUploadModule } from 'src/app/modules/shared/image-upload/image-upload.module';

const routes: Routes = [
  {
    path: '',
    component: AddNotificationComponent
  }
];

@NgModule({
  declarations: [AddNotificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MediaUploadModule,
    MatRadioModule,
    WhiteSpaceModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule,
    ImageUploadModule
  ]
})
export class AddNotificationModule { }
