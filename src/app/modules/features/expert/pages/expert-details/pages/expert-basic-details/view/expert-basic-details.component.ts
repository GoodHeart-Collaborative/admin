import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expert-basic-details',
  templateUrl: './expert-basic-details.component.html',
  styleUrls: ['./expert-basic-details.component.scss']
})
export class ExpertBasicDetailsComponent implements OnInit {
@Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
