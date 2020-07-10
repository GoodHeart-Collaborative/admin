import { Component, OnInit } from '@angular/core';
import { DailyUnicornTableDataSource } from '../../../model';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DailyUnicornHumourService } from '../../../service/daily-unicorn-humour.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
export type ActionType = 'deleted' | 'blocked' | 'active';
import { DAILY_UNICORN, ADD_DAILY_UNICORN } from 'src/app/constant/routes';
import { DailyUnicormHumourDetailsModule } from '../../daily-unicorm-humour-details/daily-unicorm-humour-details.module';
import { DailyUnicornHumourDetailsComponent } from '../../daily-unicorm-humour-details/view/daily-unicorn-humour-details.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-daily-unicorn-humour-listing',
  templateUrl: './daily-unicorn-humour-listing.component.html',
  styleUrls: ['./daily-unicorn-humour-listing.component.scss']
})
export class DailyUnicornHumourListingComponent implements OnInit {
  tableSource = new DailyUnicornTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
  };
  constructor(
    private $category: DailyUnicornHumourService,
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
    this.$category.queryData(params).then(res => {
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
    this.$confirmBox.listAction('Unicorn', action).subscribe((confirm) => {
      if (confirm) {
        this.$category.updateStatus(id, action).then((res) => {
          this.$utility.success(res.message);
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
    this.tableSource = new DailyUnicornTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }

  oneditHandler(id) {
    this.$router.navigate([`${DAILY_UNICORN.fullUrl}`, 'edit', id]);
  }

  onDetailsHandler(postDetails) {
    // this.$router.navigate([`${DAILY_UNICORN.fullUrl}`, id, 'details']);
    this.$matDailog.open(DailyUnicornHumourDetailsComponent, {
      width: '500px',
      data: postDetails
    }).afterClosed().subscribe(res => {
      if (res) {
          this.updateUsers();
      }
    });
  }

  onAdd() {
    this.$router.navigate([`${ADD_DAILY_UNICORN.fullUrl}`]);
  }

}
