import { Component, OnInit } from '@angular/core';
import { CalenderTableDataSource } from '../model';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { CalenderService } from '../service/calender.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { HOME_TYPE } from 'src/app/constant/drawer';
export type ActionType = 'deleted' | 'blocked' | 'active';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  tableSource = new CalenderTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  constructor(
    private $calender: CalenderService ,
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
    const { pageIndex, pageSize, searchText, filterData , sortData } = this.eventData;
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
    if (sortData) {
      params['sortOrder'] = sortData.sortOrder;
      params['sortBy'] = sortData.sortBy;
    }
    if (searchText) {
      params['searchTerm'] = searchText;
    }
    this.$calender.queryData(params).then(res => {
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
    this.$confirmBox.listAction('post', action == 'active'  ?  'active' : ( action == 'deleted' ? 'delete' : 'block'))
    .subscribe((confirm) => {
      if (confirm) {
        this.$calender.updateStatus(id, action).then((res) => {
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
    this.tableSource = new CalenderTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }

  /**
   * Edit Handler
   * @param id
   */
//  oneditHandler(id) {
//     this.$router.navigate([`${DAILY_INSPIRATION.fullUrl}`, 'edit', id]);
//   }

  /**
   * Details Handler
   * @param id
   */
  // onDetailsHandler(id) {
  //   this.$router.navigate([`${DAILY_INSPIRATION.fullUrl}`, id, 'details']);
  // }

  /**
   * Add Handler
   */
// onAdd() {
//     this.$router.navigate([`${ADD_DAILY_INSPIRATION.fullUrl}`]);
// }


  /**
   * user Like Handler
   * @param id
   */
  // onlikeHandler(like: any, likesCount: number) {
  //   this.$matDailog.open(LikeActionComponent, {
  //     width: '500px',
  //     data: like
  //   }).afterClosed().subscribe();
  // }

  /**
   * ON LIKE Handler
   * @param id
   */
  // likeHandler(id: string, likesCount: number) {
  //   if (!likesCount) {
  //     return;
  //   }
  //   this.$common.onLikeHandler(id).then(res => {
  //     const like = res.data['list'];
  //     this.onlikeHandler(like, likesCount);
  //   });
  // }

  // onCommentsHandler(id: string, commentCount: number) {
  //   if (!commentCount) {
  //     return;
  //   }
  //   this.$matDailog.open(CommentsComponent, {
  //     width: '500px',
  //     data: id
  //   }).afterClosed().subscribe();
  // }


  /**
   * View Fill Image
   *
   */
  // onImageClick(image: string, type: number) {
  //   if (!image) {
  //     return;
  //   }
  //   this.$matDailog.open(ViewFullImageComponent, {
  //     panelClass: 'view-full-image-modal',
  //     data: {image, type}
  //   }).afterClosed().subscribe();
  // }


}
