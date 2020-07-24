import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertVideoComponent } from './view/expert-video.component';



@NgModule({
  declarations: [ExpertVideoComponent],
  imports: [
    CommonModule
  ],
  exports: [ExpertVideoComponent]
})
export class ExpertVideoModule { }
