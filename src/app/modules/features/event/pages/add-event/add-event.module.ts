import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './view/add-event.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';


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
    MediaUploadModule, 
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})

export class AddEventModule { }
