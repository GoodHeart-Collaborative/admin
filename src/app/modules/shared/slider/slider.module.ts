import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './view/slider.component';
import { MatDialogModule, MatIconModule } from '@angular/material';



@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports : [SliderComponent],
  entryComponents: [SliderComponent]
})
export class SliderModule { }
