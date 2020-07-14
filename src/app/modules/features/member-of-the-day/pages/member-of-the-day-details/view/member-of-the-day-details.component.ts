import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-member-of-the-day-details',
  templateUrl: './member-of-the-day-details.component.html',
  styleUrls: ['./member-of-the-day-details.component.scss']
})
export class MemberOfTheDayDetailsComponent implements OnInit {
  memberDetails: any;
  constructor($router: ActivatedRoute,
              $breadcrumb: BreadcrumbService) {
           this.memberDetails = $router.snapshot.data.dailyData.data;
           console.log(this.memberDetails);
           $breadcrumb.replace(this.memberDetails.id, this.memberDetails.title);
          }

  ngOnInit() {
  }

}
