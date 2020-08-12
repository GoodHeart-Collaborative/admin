import { NativeDateAdapter, MatDateFormats } from '@angular/material';

export class AppDateAdapter extends NativeDateAdapter {
    format(date: Date, displayFormat: Object): string {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ];
        if (displayFormat === "input") {
            // console.log(date.getMonthNames());
            let day: string = date.getDate().toString();
            day = +day < 10 ? "0" + day : day;
            let month: string = (date.getMonth() + 1).toString();
            // month = +month < 10 ? "0" + month : month;
            let year = date.getFullYear();
            console.log(months[date.getMonth()]);
            // return `${day}/${month}/${year}`;
            return ` ${day} ${months[date.getMonth()]},${year}`;
        }
        return date.toDateString();
    }
}
export const APP_DATE_FORMATS: MatDateFormats = {
    parse: {
        dateInput: { month: "short", year: "numeric", day: "numeric" },
    },
    display: {
        dateInput: "input",
        monthYearLabel: { year: "numeric", month: "numeric" },
        dateA11yLabel: {
            year: "numeric", month: "long", day: "numeric"
        },
        monthYearA11yLabel: { year: "numeric", month: "long" },
    }
};