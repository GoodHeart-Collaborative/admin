import { Component, OnInit } from '@angular/core';
import { UserTableDataSource } from '../../../model/index';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { UsersService } from '../../../service/users.service';
import { HttpParams } from '@angular/common/http';

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
  constructor(
    private $userService: UsersService
  ) {
  }

  ngOnInit() {
    this.updateUsers();
  }

  updateUsers() {
    const { pageIndex, pageSize, searchText, filterData } = this.eventData;
    let params = {

      page: `${pageIndex + 1}`,
      limit: `${pageSize}`,

    };
    // if (searchText) {
    //   params = params.set('searchTerm', searchText);
    // }
    // if (filterData) {
    //   const keys = Object.keys(filterData);
    //   keys.forEach((key: string) => {
    //     if (key === 'fromDate' || key === 'toDate') {
    //       const value: Date = filterData[key];
    //       if (key === 'toDate') {
    //         value.setHours(23, 59, 59, 999);
    //       }
    //       params = params.set(key, `${value.getTime()}`);
    //     } else {
    //       params = params.set(key, filterData[key]);
    //     }
    //   });
    // }
    this.$userService.queryData(params).then(res => {
      console.log(res);
      this.tableSource = new UserTableDataSource({
        pageIndex,
        pageSize,
        rows: res.data['data'],
        total: res.data['total']
      });
    });
  }

  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateUsers();
  }


}
