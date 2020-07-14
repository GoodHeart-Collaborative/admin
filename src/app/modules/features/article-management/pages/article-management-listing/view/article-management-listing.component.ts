import { Component, OnInit } from '@angular/core';
import { ArticleTableDataSource } from '../../../model';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DAILY_ADVICE, ADD_DAILY_ADVICE, ADD_ARTICLES, ARTICLES } from 'src/app/constant/routes';
import { ArticleManagementService } from '../../../service/article-management.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
export type ActionType = 'deleted' | 'blocked' | 'active';

@Component({
  selector: 'app-article-management-listing',
  templateUrl: './article-management-listing.component.html',
  styleUrls: ['./article-management-listing.component.scss']
})
export class ArticleManagementListingComponent implements OnInit {

  tableSource = new ArticleTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  constructor(
    private $article: ArticleManagementService,
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService
  ) {
  }

  ngOnInit() {
    this.updateUsers();
  }

  updateUsers() {
    const { pageIndex, pageSize, searchText, filterData , sortData} = this.eventData;
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
      params['sortOrder'] = sortData.sortOrder;
      params['sortBy'] = sortData.sortBy;
    }
    this.$article.queryData(params).then(res => {
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
        this.$article.updateStatus(id, action).then((res) => {
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
    this.tableSource = new ArticleTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }

 oneditHandler(id) {
    this.$router.navigate([`${ARTICLES.fullUrl}`, 'edit', id]);
  }

  onDetails(id) {
    this.$router.navigate([`${ARTICLES.fullUrl}`, id, 'details']);
  }

 onAdd() {
    this.$router.navigate([`${ADD_ARTICLES.fullUrl}`]);
 }

}
