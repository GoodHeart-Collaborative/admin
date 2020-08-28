import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateTimePipe } from './pipe/date-time.pipe';



@NgModule({
  declarations: [DateTimePipe],
  imports: [
    CommonModule
  ],
  exports: [DateTimePipe],
  providers: [DatePipe]
})
export class DateTimePipeModule { }
