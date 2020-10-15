import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventCategoryComponent } from './view/add-event-category.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
import { ImageUploadModule } from 'src/app/modules/shared/image-upload/image-upload.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' ,
   component: AddEventCategoryComponent
  },
];


@NgModule({
  declarations: [AddEventCategoryComponent],
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
  ]
})
export class AddEventCategoryModule { }
