import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddForumComponent } from './view/add-forum.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';

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
    MediaUploadModule,
  ]
})
export class AddForumModule { }
