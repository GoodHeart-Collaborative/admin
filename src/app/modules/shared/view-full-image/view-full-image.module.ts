import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFullImageComponent } from './view/view-full-image.component';
import { MatIconModule, MatDialogModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';



@NgModule({
  declarations: [ViewFullImageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    CustomImageModule,
    MatDialogModule
  ],
  exports : [ViewFullImageComponent],
  entryComponents: [ViewFullImageComponent]
})
export class ViewFullImageModule { }
