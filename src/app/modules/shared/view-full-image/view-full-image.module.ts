import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFullImageComponent } from './view/view-full-image.component';



@NgModule({
  declarations: [ViewFullImageComponent],
  imports: [
    CommonModule
  ],
  exports : [ViewFullImageComponent],
  entryComponents: [ViewFullImageComponent]
})
export class ViewFullImageModule { }
