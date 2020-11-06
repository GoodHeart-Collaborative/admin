import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {


  transform(data: any, leftTime = false): any {
    console.log(data);

    if (leftTime) {

      let hours = Math.floor(((data - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor(((data - Date.now()) % (1000 * 60 * 60)) / (1000 * 60));
      return hours + 'H ' + minutes + 'M';
    }


    if (data) {
      let days = Math.round(Math.abs((new Date().getTime() - new Date(data).getTime()) / (24 * 60 * 60 * 1000)));
      let hours = Math.round((new Date().valueOf() - new Date(data).valueOf()) / 1000 / 60 / 60);
      let minutes = Math.floor((Math.abs(new Date().valueOf() - new Date(data).valueOf()) / 1000) / 60);
      let seconds = Math.floor((Math.abs(new Date().valueOf() - new Date(data).valueOf()) / 1000));
      console.log(days);
      if (days <= 365) {
        return `${Math.round(365 / 222)} year`;
      } else if (days > 30) {
        // return new Date(data).toDateString().split(' ').splice(0,1).join(' ')
        return new Date(data).toDateString();

      } else if (days > 0 && days <= 30) {

        return days + (days > 1 ? ' days ' : ' day ') + 'ago';

      } else if (days < 1 && hours > 0) {

        return hours + ' hrs ago';

      } else if (days < 1 && hours < 1 && minutes > 0) {

        return minutes + ' min ago';

      } else if (days < 1 && hours < 1 && minutes < 1 && seconds > -1) {

        return ' Just' + ' Now';
      }
    }
  }



}
