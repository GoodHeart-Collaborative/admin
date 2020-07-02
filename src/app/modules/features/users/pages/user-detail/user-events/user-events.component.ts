import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent implements OnInit {
  isProcessing: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isProcessing = true;
  }

}
