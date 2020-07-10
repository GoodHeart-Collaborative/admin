import { Component, OnInit, Inject } from '@angular/core';
import {  Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DAILY_UNICORN } from 'src/app/constant/routes';

@Component({
  selector: 'app-daily-unicorn-humour-details',
  templateUrl: './daily-unicorn-humour-details.component.html',
  styleUrls: ['./daily-unicorn-humour-details.component.scss']
})
export class DailyUnicornHumourDetailsComponent implements OnInit {
  dailyUnicornDetails: any;

  constructor(
          private $router: Router,
          private $dialogRef: MatDialogRef<DailyUnicornHumourDetailsComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any ) {
            console.log(data);
     }

  ngOnInit() {}

  onEditDetails() {
    this.$router.navigate([`${DAILY_UNICORN.fullUrl}`, 'edit', this.data._id]);
    this.$dialogRef.close();
    }
}
