import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_NOTIFICATIONS } from 'src/app/constant/routes';

@Component({
  selector: 'app-notification-listing',
  templateUrl: './notification-listing.component.html',
  styleUrls: ['./notification-listing.component.scss']
})
export class NotificationListingComponent implements OnInit {

  constructor(private $route: Router) { }

  ngOnInit() {
  }

  onAdd() {
      this.$route.navigate([ADD_NOTIFICATIONS.fullUrl]);
  }

}
