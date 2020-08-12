import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EXPERT, ADD_EXPERT } from 'src/app/constant/routes';
import { ExpertService } from '../../../service/expert.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ExpertTableDataSource } from '../models/index';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
export type ActionType = 'deleted' | 'blocked' | 'active';
import { GlobalService } from 'src/app/services/global/global.service';
@Component({
  selector: 'app-expert-listing',
  templateUrl: './expert-listing.component.html',
  styleUrls: ['./expert-listing.component.scss']
})
export class ExpertListingComponent implements OnInit {


  tableSource = new ExpertTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  constructor(
    private $article: ExpertService,
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $global: GlobalService
  ) {
  }

  ngOnInit() {
    this.updateUsers();
  }

  updateUsers() {
    const { pageIndex, pageSize, searchText, filterData, sortData } = this.eventData;
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
          params[key] = `${new Date(value).toISOString()}`;
        } else {
          params[key] = filterData[key];
        }
      });
    }
    if (searchText) {
      params['searchTerm'] = searchText;
    }
    if (sortData) {
      params['sortOrder'] = sortData.sortOrder;
      params['sortBy'] = sortData.sortBy;
    }
    this.$article.queryData(params).then(res => {
      this.userData = res.data['list'];
      // console.log(res.data['list']);
      this.setUpTableResource(this.userData);
    });
  }


  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateUsers();
  }

  onActionHandler(id: string, action: ActionType) {
    console.log(this.userData);
    const index = this.userData.findIndex(user => user._id === id);
    this.$confirmBox.listAction('expert', action == 'active' ? 'Active' : (action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$article.updateStatus(id, action).then((res) => {
            this.$utility.success(res.message);
            this.handleActions(action, index);
          });
        }
      });
  }

  handleActions(action: ActionType, index) {
    switch (action) {
      case 'deleted':
        this.userData.splice(index, 1);
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
    this.userData = this.userData.map((user, i) => {
      if (i === index) {
        user.status = action;
      }
      return user;
    });
  }

  setUpTableResource(userRecords) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new ExpertTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords,
      total: userRecords['total']
    });
  }

  oneditHandler(id , data) {
    const application = this.$global.encodeData(data);
    this.$router.navigate([`${EXPERT.fullUrl}`, 'edit', id],
      {
        queryParams: { application }
      });
    // this.$router.navigate([`${EXPERT.fullUrl}`, 'edit', id]);
  }

  onDetails(id, data) {
    const application = this.$global.encodeData(data);
    this.$router.navigate([`${EXPERT.fullUrl}`, id, 'details'],
      {
        queryParams: { application }
      });
  }

  onAdd() {
    this.$router.navigate([`${ADD_EXPERT.fullUrl}`]);
  }

}
