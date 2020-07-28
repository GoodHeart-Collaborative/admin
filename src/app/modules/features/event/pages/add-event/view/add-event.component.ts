import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  imageChangedEvent: any;
  constructor() { }

  ngOnInit() {
  }

  onProifleImageSelected(event) {
    this.imageChangedEvent = event;
    console.log(this.imageChangedEvent);

  }

}
