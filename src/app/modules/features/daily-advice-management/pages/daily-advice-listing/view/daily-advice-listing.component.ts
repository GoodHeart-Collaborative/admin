import { Component, OnInit } from '@angular/core';
import { DailyAdviceTableDataSource } from '../../../model';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
export type ActionType = 'deleted' | 'blocked' | 'active';
import { DAILY_ADVICE , ADD_DAILY_ADVICE } from 'src/app/constant/routes';
import { DailyAdviceManagementService } from '../../../service/daily-advice-management.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
@Component({
  selector: 'app-daily-advice-listing',
  templateUrl: './daily-advice-listing.component.html',
  styleUrls: ['./daily-advice-listing.component.scss']
})
export class DailyAdviceListingComponent implements OnInit {

  tableSource = new DailyAdviceTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  constructor(
    private $category: DailyAdviceManagementService,
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService
  ) {
  }

  ngOnInit() {
    this.updateUsers();
  }

  updateUsers() {
    const { pageIndex, pageSize, searchText, filterData , sortData } = this.eventData;
    console.log(this.eventData);
    
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
    if (sortData) {
      console.log(sortData);
      params['sortOrder'] = sortData.sortOrder;
      params['sortBy'] = sortData.sortBy;
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
    this.$confirmBox.listAction('Advice', action).subscribe((confirm) => {
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
    this.tableSource = new DailyAdviceTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }

 oneditHandler(id) {
    this.$router.navigate([`${DAILY_ADVICE.fullUrl}`, 'edit', id]);
  }

  onDetailsHandler(id) {
    this.$router.navigate([`${DAILY_ADVICE.fullUrl}`, id, 'details']);
  }

 onAdd() {
    this.$router.navigate([`${ADD_DAILY_ADVICE.fullUrl}`]);
 }

}
