import { Component, OnInit } from '@angular/core';
import { DailyUnicornTableDataSource } from '../../../model';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DailyUnicornHumourService } from '../../../service/daily-unicorn-humour.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
export type ActionType = 'deleted' | 'blocked' | 'active';
import { DAILY_UNICORN, ADD_DAILY_UNICORN } from 'src/app/constant/routes';
import { DailyUnicornHumourDetailsComponent } from '../../daily-unicorm-humour-details/view/daily-unicorn-humour-details.component';
import { MatDialog } from '@angular/material';
import { HOME_TYPE } from 'src/app/constant/drawer';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommentsComponent } from 'src/app/modules/shared/comments/view/comments/comments.component';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';
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
    sortData: null,
  };
  like: any;
  constructor(
    private $category: DailyUnicornHumourService,
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $matDailog: MatDialog,
    private $common: CommonService
  ) {
  }

  ngOnInit() {
    this.updateUsers();
  }
  /**
   * User listing Handler
   */
  updateUsers() {
    const { pageIndex, pageSize, searchText, filterData, sortData } = this.eventData;
    let params = {
      page: `${pageIndex + 1}`,
      limit: `${pageSize}`,
      type: `${HOME_TYPE.UNICRON}`
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
    if (sortData) {
      params['sortOrder'] = sortData.sortOrder;
      params['sortBy'] = sortData.sortBy;
    }
    if (searchText) {
      params['searchTerm'] = searchText;
    }
    this.$category.queryData(params).then(res => {
      this.userData = res['data'];
      this.setUpTableResource(this.userData);
    });
  }

  /**
   * Listing Pagination Hnadler
   * @param event
   */
  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateUsers();
  }

  /**
   * User Action Handler
   * @param id
   * @param action
   */
  onActionHandler(id: string, action: ActionType) {
    const index = this.userData.data.findIndex(user => user._id === id);
    this.$confirmBox.listAction('post', action == 'active' ? 'active' : (action == 'deleted' ? 'delete' : 'block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$category.updateStatus(id, action).then((res) => {
            this.$utility.success(res.message);
            this.handleActions(action, index);
          });
        }
      });
  }
  /**
   * Action Update Handler
   * @param action
   * @param index
   */
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
  /**
   *
   * @param action
   * @param index
   */
  handleStatus(action: 'blocked' | 'active', index: number) {
    this.userData.data = this.userData.data.map((user, i) => {
      if (i === index) {
        user.status = action;
      }
      return user;
    });
  }

  /**
   * User Set Up Table Handler
   * @param userRecords
   */
  setUpTableResource(userRecords) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new DailyUnicornTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }
  /**
   * User Edit Handler
   * @param id
   */
  oneditHandler(id) {
    this.$router.navigate([`${DAILY_UNICORN.fullUrl}`, 'edit', id]);
  }

  /***
   * User Details Handler
   */
  onDetailsHandler(postDetails) {
    this.$matDailog.open(DailyUnicornHumourDetailsComponent, {
      width: '500px',
      data: postDetails
    }).afterClosed().subscribe(res => {
      if (res) {
        this.updateUsers();
      }
    });
  }

  /**
   * User Add Handler
   */
  onAdd() {
    this.$router.navigate([`${ADD_DAILY_UNICORN.fullUrl}`]);
  }



  onCommentsHandler(id: string, commentCount: number) {
    if (!commentCount) {
      return;
    }
    this.$matDailog.open(CommentsComponent, {
      width: '500px',
      data: id
    }).afterClosed().subscribe();
  }


  /**
   * View Fill Image
   *
   */
  onImageClick(image, type) {
    if (!image) {
      return;
    }
    this.$matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: { image, type }
    }).afterClosed().subscribe();
  }

  /**
   * ON LIKE Handler
   * @param id
   */
  likeHandler(id: string, likesCount: number) {
    if (!likesCount) {
      return;
    }
    const params = {
      pageNo: 1,
      limit: 100,
      postId: id
    };
    this.$common.onLikeHandler(params).then(res => {
      const like = res.data['list'];
      this.onlikeHandler(like);
    });
  }

/**
 * user Like Handler
 * @param id
 */
  onlikeHandler(like: any) {
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: like
    }).afterClosed().subscribe();
  }
}
