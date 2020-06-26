import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-basic-detail',
  templateUrl: './user-basic-detail.component.html',
  styleUrls: ['./user-basic-detail.component.scss']
})
export class UserBasicDetailComponent implements OnInit {
@Input() data;
  constructor() { }

  ngOnInit() {
  }

}
