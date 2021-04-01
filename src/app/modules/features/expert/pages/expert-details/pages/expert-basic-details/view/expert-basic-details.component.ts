import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { INDUSTRY, PROFESSION_TYPE } from 'src/app/constant/drawer';
@Component({
  selector: 'app-expert-basic-details',
  templateUrl: './expert-basic-details.component.html',
  styleUrls: ['./expert-basic-details.component.scss']
})
export class ExpertBasicDetailsComponent implements OnInit , OnChanges{
@Input() data:any;
industry = INDUSTRY;
profession = PROFESSION_TYPE;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {    
  }
}
