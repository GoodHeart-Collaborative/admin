import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropComponent } from './image-crop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';

@NgModule({
  declarations: [ImageCropComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    CustomImageModule,
    MatButtonModule,
  ],
  exports: [ImageCropComponent]
})
export class ImageCropModule { }
