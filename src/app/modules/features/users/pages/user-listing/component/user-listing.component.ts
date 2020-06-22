import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { PAGE_OPTIONS } from 'src/app/constant/constants';
import {USER_LIST_CONFIG , UserTableDataSource } from '../../../model/index';
@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  userList: MatTableDataSource<any>;
  pageOptions = { ...PAGE_OPTIONS };
  sub: Subscription = new Subscription();
  listingConfig = USER_LIST_CONFIG;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  constructor() { }

  ngOnInit() {
  }

  onOptionChange(event) {
    this.pageOptions = event;
    // this.fetchUserList();
  }

}
