import { Component, OnInit } from '@angular/core';
import { DailyAdviceTableDataSource } from '../../../model';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
export type ActionType = 'deleted' | 'blocked' | 'active';
import { DAILY_ADVICE, ADD_DAILY_ADVICE } from 'src/app/constant/routes';
import { DailyAdviceManagementService } from '../../../service/daily-advice-management.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HOME_TYPE } from 'src/app/constant/drawer';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommentsComponent } from 'src/app/modules/shared/comments/view/comments/comments.component';
import { MatDialog } from '@angular/material';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { ReportProblemComponent } from 'src/app/modules/shared/report-problem/view/report-problem.component';
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
    private $utility: UtilityService,
    private $matDailog: MatDialog,
    private $common: CommonService
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
      type: `${HOME_TYPE.DAILY_ADVICE}`
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

  oneditHandler(id: string, status: string) {
    // if (status == 'blocked') {
    //   return;
    // }
    this.$router.navigate([`${DAILY_ADVICE.fullUrl}`, 'edit', id]);
  }

  onDetailsHandler(id) {
    this.$router.navigate([`${DAILY_ADVICE.fullUrl}`, id, 'details']);
  }

  onAdd() {
    // this.$router.navigate([`${ADD_DAILY_ADVICE.fullUrl}`]);
    this.$router.navigate([`${DAILY_ADVICE.fullUrl}`, 'add']);
  }

  /**
   * ON LIKE Handler
   * @param id
   */
  likeHandler(id: string, likesCount: number) {
    if (!likesCount) {
      return;
    }
    this.$common.onLikeHandler(id).then(res => {
      const like = res.data['list'];
      this.onlikeHandler(like, likesCount);
    });
  }

  /**
   * user Like Handler
   * @param id
   */
  onlikeHandler(like: any, likesCount: number) {

    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: like
    }).afterClosed().subscribe();
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
  onImageClick(image: string, type: number) {
    if (!image) {
      return;
    }
    this.$matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: { image, type }
    }).afterClosed().subscribe();
  }


  // onReportProblem(id: string, count: number) {
  //   if (!count) {
  //     return;
  //   }
  //   this.$common.onReportProblemHandler(id).then(res => {
  //     if (res && res.data) {
  //       this.$matDailog.open(ReportProblemComponent, {
  //         width: '500px',
  //         data: res.data['data']
  //       }).afterClosed().subscribe();
  //     }
  //   });
  // }
}
