import { Component, OnInit, Input } from '@angular/core';
import { INDUSTRY } from 'src/app/constant/drawer';
@Component({
  selector: 'app-expert-basic-details',
  templateUrl: './expert-basic-details.component.html',
  styleUrls: ['./expert-basic-details.component.scss']
})
export class ExpertBasicDetailsComponent implements OnInit {
@Input() data:any;
industry = INDUSTRY;
  constructor() { }

  ngOnInit() {
  }

}
