import { Component, OnInit } from '@angular/core';
import { UserTableDataSource } from '../../../model/index';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { UsersService } from '../../../service/users.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { USER_DETAIL, USER } from 'src/app/constant/routes';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

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
    private $userService: UsersService,
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService
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
    if (filterData) {
      const keys = Object.keys(filterData).filter(el => filterData[el]);
      keys.forEach((key: string) => {
        if (key === 'fromDate' || key === 'toDate') {
          const value: Date = filterData[key];
          if (key === 'toDate' && value) {
            value.setHours(23, 59, 59, 999);
          }
          params[key] = `${new Date(value).getTime()}`;
        } else {
          params[key] = filterData[key];
        }
      });
    }
    if (searchText) {
      params['searchTerm'] = searchText;
    }
    this.$userService.queryData(params).then(res => {
      this.tableSource = new UserTableDataSource({
        pageIndex,
        pageSize,
        rows: res.data['data'],
        total: res.data['total']
      });
    });
  }


  onDetailsHandler(id) {
    this.$router.navigate([USER.fullUrl, id, 'details']);
  }

  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateUsers();
  }

  onActionHandler(id: string, action) {
    this.$confirmBox.listAction('User', action).subscribe((confirm) => {
      if (confirm) {
        this.$userService.updateStatus(id, action).then((res) => {
          this.$utility.success(res.message);
          this.updateUsers();
        });
      }
    });
  }
}
