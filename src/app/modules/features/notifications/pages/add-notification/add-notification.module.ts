import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotificationComponent } from './view/add-notification.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';

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
  ]
})
export class AddNotificationModule { }
