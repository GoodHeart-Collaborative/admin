import { Component, OnInit } from '@angular/core';
import { UserTableDataSource } from '../../../model/index';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  tableSource = new UserTableDataSource();
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
  };
  constructor() { }

  ngOnInit() {
    this.tableSource = new UserTableDataSource({
      pageIndex: 0,
      pageSize: 10,
      total: 100,
      rows: [
        {name: 'shama',
         email: 'fvfsfsf',
         phoneNo: 8973847234}
      ]
  });
  }


  onChangeHandler(event: Table.OptionEvent) {
    this.eventData = event.data;
    // this.updateUsers();
  }
 
  onOptionChange(event) {

  }

}
