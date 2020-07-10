import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-daily-advice-details',
  templateUrl: './daily-advice-details.component.html',
  styleUrls: ['./daily-advice-details.component.scss']
})
export class DailyAdviceDetailsComponent implements OnInit {

  adviceDetails: any;
  constructor(
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService) {
 this.adviceDetails = $router.snapshot.data.dailyData.data;
 console.log(this.adviceDetails);
 
 $breadcrumb.replace(this.adviceDetails.id, this.adviceDetails.title);
}

  ngOnInit() {
  }

}
