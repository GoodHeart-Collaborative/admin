import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-inspiration-details',
  templateUrl: './daily-inspiration-details.component.html',
  styleUrls: ['./daily-inspiration-details.component.scss']
})
export class DailyInspirationDetailsComponent implements OnInit {
  dailyInspirationDetails: any;

  constructor(
               $router: ActivatedRoute,
               $breadcrumb: BreadcrumbService) {
      this.dailyInspirationDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.dailyInspirationDetails.id, this.dailyInspirationDetails.title);
    }

  ngOnInit() {
  }

}
