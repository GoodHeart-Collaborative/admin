import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './view/slider.component';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [SliderComponent]
})
export class SliderModule { }
