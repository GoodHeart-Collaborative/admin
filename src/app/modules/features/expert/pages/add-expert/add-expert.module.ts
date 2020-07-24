import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpertComponent } from './view/add-expert.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';
import { MatFormFieldModule,
         MatButtonModule,
        MatDatepickerModule,
        MatInputModule,
       MatSelectModule } from '@angular/material';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';

const routes: Routes = [
  {
    path: '',
    component: AddExpertComponent
  }
];

@NgModule({
  declarations: [AddExpertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomImageModule,
    MediaUploadModule,
    MatFormFieldModule,
    MatButtonModule,
    CustomImageModule,
    MatSelectModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    WhiteSpaceModule
  ]
})
export class AddExpertModule { }
