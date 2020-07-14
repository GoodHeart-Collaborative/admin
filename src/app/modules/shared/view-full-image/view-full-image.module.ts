import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFullImageComponent } from './view/view-full-image.component';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [ViewFullImageComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports : [ViewFullImageComponent],
  entryComponents: [ViewFullImageComponent]
})
export class ViewFullImageModule { }
