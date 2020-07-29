import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './view/slider.component';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';



@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    CustomImageModule
  ],
  exports : [SliderComponent],
  entryComponents: [SliderComponent]
})
export class SliderModule { }
