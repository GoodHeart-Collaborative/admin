import { Component, OnInit } from '@angular/core';
import {  MatDialog } from '@angular/material';
import { AddMemberOfTheDayComponent } from '../../add-member-of-the-day/view/add-member-of-the-day.component';
import { MemberOfTheDayService } from '../../../service/member-of-the-day.service';
import { MemberTableDataSource } from '../../../model';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { MEMBER_OF_THE_DAY } from 'src/app/constant/routes';
export type ActionType = 'deleted' | 'blocked' | 'active';
@Component({
  selector: 'app-member-of-the-day-listing',
  templateUrl: './member-of-the-day-listing.component.html',
  styleUrls: ['./member-of-the-day-listing.component.scss']
})
export class MemberOfTheDayListingComponent implements OnInit {
  tableSource = new MemberTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
  };
  constructor(
    private $member: MemberOfTheDayService,
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $matDailog: MatDialog
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
    this.$member.queryData(params).then(res => {
      this.userData = res['data'];
      this.setUpTableResource(this.userData);
    });
  }


  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateUsers();
  }

  onActionHandler(id: string, action: ActionType) {
    const index = this.userData.data.findIndex(user => user._id === id);
    this.$confirmBox.listAction('Advice', action).subscribe((confirm) => {
      if (confirm) {
        this.$member.updateStatus(id, action).then((res) => {
          // this.$utility.success(res.message);
          this.handleActions(action, index);
        });
      }
    });
  }

  handleActions(action: ActionType, index) {
    switch (action) {
      case 'deleted':
        this.userData.data.splice(index, 1);
        this.userData.total = this.userData.total - 1;
        break;
      case 'active':
        this.handleStatus(action, index);

        break;
      case 'blocked':
        this.handleStatus(action, index);

        break;
      default:
        break;
    }
    this.setUpTableResource(this.userData);
  }

  handleStatus(action: 'blocked' | 'active', index: number) {
    this.userData.data = this.userData.data.map((user, i) => {
      if (i === index) {
        user.status = action;
      }
      return user;
    });
  }

  setUpTableResource(userRecords) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new MemberTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }

//  oneditHandler() {
//    this.$matDailog.open(AddMemberOfTheDayComponent, {
//     width: '500px',
//   }).afterClosed().subscribe();
//  }

  onDetails(id) {
    this.$router.navigate([`${MEMBER_OF_THE_DAY.fullUrl}`, id, 'details']);
  }

  onAdd() {
    const dialogRef = this.$matDailog.open(AddMemberOfTheDayComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }

}
