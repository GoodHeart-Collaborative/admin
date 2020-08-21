import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyCharcterDirective } from './only-charcter.directive';



@NgModule({
  declarations: [OnlyCharcterDirective],
  imports: [
    CommonModule
  ],
  exports:[OnlyCharcterDirective]
})
export class OnlyCharcterModule { }
