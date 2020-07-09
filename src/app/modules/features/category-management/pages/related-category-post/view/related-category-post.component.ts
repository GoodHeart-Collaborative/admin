import { Component, OnInit } from '@angular/core';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { RelatedCategoryTableDataSource } from '../model/index';
import { CategoryManagementService } from '../../../service/category-management.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { USER, CATEGORY } from 'src/app/constant/routes';
export type ActionType = 'deleted' | 'blocked' | 'active';

@Component({
  selector: 'app-related-category-post',
  templateUrl: './related-category-post.component.html',
  styleUrls: ['./related-category-post.component.scss']
})
export class RelatedCategoryPostComponent implements OnInit {

  tableSource = new RelatedCategoryTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
  };
  constructor(
    private $category: CategoryManagementService,
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
    this.$category.queryData(params).then(res => {
      this.userData = res['data'];
      this.setUpTableResource(this.userData);
    });
  }


  onDetailsHandler(id) {
    this.$router.navigate([USER.fullUrl, id, 'details']);
  }

  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateUsers();
  }

  onActionHandler(id: string, action: ActionType) {
    const index = this.userData.data.findIndex(user => user._id === id);
    this.$confirmBox.listAction('User', action).subscribe((confirm) => {
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
    this.tableSource = new RelatedCategoryTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }

 categoryDetailsHandler(id: string) {
    this.$router.navigate([`${CATEGORY.fullUrl}`, id, id, 'details']);
  }

}
