import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './view/add-event.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, 
  MatInputModule, MatSelectModule,
   MatCheckboxModule, MatDatepickerModule,
   MatNativeDateModule } from '@angular/material';
import { ImageUploadModule } from 'src/app/modules/shared/image-upload/image-upload.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GooglePlacesModule } from 'src/app/directives/google-places/google-places.module';


const routes: Routes = [
  {
    path: '',
    component: AddEventComponent
  }
];

@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ImageUploadModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    GooglePlacesModule
  ]
})

export class AddEventModule { }
