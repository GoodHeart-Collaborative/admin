import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_EVENTS, EVENTS } from 'src/app/constant/routes';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {

  constructor(private $router: Router) { }

  ngOnInit() {
  }

  onDetails() {
    this.$router.navigate([`${EVENTS.fullUrl}`, '443412412414dasdsdasds', 'details']);
   }

  onAdd() {
    this.$router.navigate([`${ADD_EVENTS.fullUrl}`]);
   }

}
