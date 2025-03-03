import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timesince'
})
export class TimesincePipe implements PipeTransform {

  transform(value: any): string {
    var date: any = new Date(value);
    var now: any = new Date();
    var seconds: number = Math.floor((now - date) / 1000);

    if (seconds < 1) {
      return 'now'
    }

    var timesince: number;
    var timeunit: string;
    
    if (seconds > 31622400) {
      timesince = Math.floor(seconds / 31622400);
      timeunit = 'year';
    } else if (seconds > 2635200) {
      timesince = Math.floor(seconds / 2635200);
      timeunit = 'month';
    } else if (seconds > 86400) {
      timesince = Math.floor(seconds / 86400);
      timeunit = 'day';
    } else if (seconds > 3600) {
      timesince = Math.floor(seconds / 3600);
      timeunit = 'hour';
    } else if (seconds > 60) {
      timesince = Math.floor(seconds / 60);
      timeunit = 'minute';
    } else {
      timesince = seconds;
      timeunit = 'second';
    }

    return timesince + ' ' + timeunit + (timesince == 1 ? '' : 's') + ' ago';
  }

}
