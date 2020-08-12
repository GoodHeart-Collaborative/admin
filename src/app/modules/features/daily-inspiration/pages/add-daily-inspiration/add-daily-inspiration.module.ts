import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDailyInspiratinComponent } from './view/add-daily-inspiratin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatIconModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
import { EditProfileService } from '../../../admin/edit-profile/service/edit-profile.service';
import { ImageUploadModule } from 'src/app/modules/shared/image-upload/image-upload.module';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/constant/format-datepicker';


const routes: Routes = [
  {
    path: '',
    component: AddDailyInspiratinComponent
  }
];
@NgModule({
  declarations: [AddDailyInspiratinComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIconModule,
    MatCheckboxModule,
    CustomImageModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CustomImageModule,
    MediaUploadModule,
    WhiteSpaceModule,
    ImageUploadModule
  ],
  providers: [EditProfileService,
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }]
})
export class AddDailyInspirationModule { }
