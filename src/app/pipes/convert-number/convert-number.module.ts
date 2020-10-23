import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertNumberPipe } from './convert-number.pipe';



@NgModule({
  declarations: [ConvertNumberPipe],
  imports: [
    CommonModule
  ],
  exports: [ConvertNumberPipe]
})
export class ConvertNumberModule { }
