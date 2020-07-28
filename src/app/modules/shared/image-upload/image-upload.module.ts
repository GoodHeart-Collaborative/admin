import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './view/image-upload.component';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [ImageUploadComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [ImageUploadComponent]
})
export class ImageUploadModule { }
