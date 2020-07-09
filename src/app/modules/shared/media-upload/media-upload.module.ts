import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaUploadComponent } from './view/media-upload.component';
import { MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';

@NgModule({
  declarations: [MediaUploadComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    CustomImageModule
  ],
  exports: [
    MediaUploadComponent
  ]
})
export class MediaUploadModule { }
