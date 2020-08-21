import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpertContentComponent } from './view/add-expert-content.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatSelectModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/constant/format-datepicker';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
import { OnlyCharcterModule } from 'src/app/directives/only-charcter/only-charcter.module';

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
    ValidationErrorPipeModule,
    WhiteSpaceModule,
    OnlyCharcterModule
  ],
  providers : [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }]
})
export class AddExpertContentModule { }
