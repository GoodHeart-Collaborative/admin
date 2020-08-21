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
       MatSelectModule,
       MatIconModule,
       DateAdapter,
       MAT_DATE_FORMATS} from '@angular/material';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
import { ImageUploadModule } from 'src/app/modules/shared/image-upload/image-upload.module';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/constant/format-datepicker';
import { OnlyCharcterModule } from 'src/app/directives/only-charcter/only-charcter.module';

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
    WhiteSpaceModule,
    CustomImageModule,
    MatIconModule,
    ImageUploadModule,
    OnlyCharcterModule
  ],
  providers : [  { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }]
})
export class AddExpertModule { }
