import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropComponent } from './image-crop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [ImageCropComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ImageCropComponent]
})
export class ImageCropModule { }
