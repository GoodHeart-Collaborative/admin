import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userCompanytyoe'
})
export class UserCompanytyoePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
