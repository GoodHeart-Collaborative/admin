import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent implements OnInit {
  isProcessing: boolean = false;
   @Input() data;
  constructor(private $router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.$router.navigate([`admin/users/${this.data._id}/event/details`]);

  }

}
