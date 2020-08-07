import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  eventDetails: any;

  constructor(
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    ) {
    this.eventDetails = $router.snapshot.data.eventDetails.data;
    $breadcrumb.replace(this.eventDetails.id, this.eventDetails.title);
    }

  ngOnInit() {
  }

}
