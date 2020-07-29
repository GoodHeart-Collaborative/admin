import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './view/image-upload.component';
import { MatDialogModule, MatIconModule, MatButtonModule, MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ImageCropModule } from '../image-crop/image-crop.module';



@NgModule({
  declarations: [ImageUploadComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    CustomImageModule,
    ImageCropModule,
    MatProgressSpinnerModule,
  ],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule { }
