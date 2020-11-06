import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericDecimalDirective } from './numeric-decimal.directive';




@NgModule({
  declarations: [NumericDecimalDirective],
  imports: [
    CommonModule
  ],
  exports: [NumericDecimalDirective]
})
export class NumericDecimalModule { }
