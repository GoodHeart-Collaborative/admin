import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertNumber'
})
export class ConvertNumberPipe implements PipeTransform {

  transform(value: any ): any {
    return (value == 4) ? 'Four' : (value == 3) ? 'Three' : value;
  }

}
