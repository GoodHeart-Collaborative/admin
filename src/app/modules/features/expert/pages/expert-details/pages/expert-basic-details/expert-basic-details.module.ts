import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertBasicDetailsComponent } from './view/expert-basic-details.component';



@NgModule({
  declarations: [ExpertBasicDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [ExpertBasicDetailsComponent]
})
export class ExpertBasicDetailsModule { }
