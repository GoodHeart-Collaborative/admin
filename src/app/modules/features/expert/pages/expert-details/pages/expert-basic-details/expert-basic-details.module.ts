import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertBasicDetailsComponent } from './view/expert-basic-details.component';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';



@NgModule({
  declarations: [ExpertBasicDetailsComponent],
  imports: [
    CommonModule,
    CustomImageModule
  ],
  exports: [ExpertBasicDetailsComponent]
})
export class ExpertBasicDetailsModule { }
