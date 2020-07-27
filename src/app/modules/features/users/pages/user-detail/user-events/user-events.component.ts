import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent implements OnInit {
  isProcessing: boolean = false;
   @Input() userDetails;
  constructor(private $router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.$router.navigate([`admin/users/${this.userDetails._id}/event/details`]);

  }

}
