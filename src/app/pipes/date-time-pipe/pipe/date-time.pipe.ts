import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateTime'
})

export class DateTimePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(value: any): any {
    return value ? this.datePipe.transform(value, 'd MMMM, y, h:mm a') : '-';
  }
}
