import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-daily-unicorn-humour-details',
  templateUrl: './daily-unicorn-humour-details.component.html',
  styleUrls: ['./daily-unicorn-humour-details.component.scss']
})
export class DailyUnicornHumourDetailsComponent implements OnInit {
  dailyUnicornDetails: any;

  constructor(
          $breadcrumb: BreadcrumbService,
          private $dialogRef: MatDialogRef<DailyUnicornHumourDetailsComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any ) {
            console.log(data);
      //  $breadcrumb.replace(this.dailyUnicornDetails.id, this.dailyUnicornDetails.title);
    }

  ngOnInit() {}

}
