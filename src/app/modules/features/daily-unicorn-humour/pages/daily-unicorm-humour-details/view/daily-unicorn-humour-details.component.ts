import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-daily-unicorn-humour-details',
  templateUrl: './daily-unicorn-humour-details.component.html',
  styleUrls: ['./daily-unicorn-humour-details.component.scss']
})
export class DailyUnicornHumourDetailsComponent implements OnInit {
  dailyUnicornDetails: any;

  constructor(
          $router: ActivatedRoute,
          $breadcrumb: BreadcrumbService) {
       this.dailyUnicornDetails = $router.snapshot.data.dailyData.data;
       $breadcrumb.replace(this.dailyUnicornDetails.id, this.dailyUnicornDetails.title);
    }

  ngOnInit() {}

}
