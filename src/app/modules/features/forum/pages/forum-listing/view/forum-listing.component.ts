import { Component, OnInit } from '@angular/core';
import { ForumTableDataSource } from '../../../model/index';
import { ForumService } from '../../../service/forum.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ADD_FORUM, FORUM } from 'src/app/constant/routes';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommentsComponent } from 'src/app/modules/shared/comments/view/comments/comments.component';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { ReportProblemComponent } from 'src/app/modules/shared/report-problem/view/report-problem.component';
import { REPORT_TYPE } from 'src/app/constant/drawer';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
export type ActionType = 'deleted' | 'blocked' | 'active';
@Component({
  selector: 'app-forum-listing',
  templateUrl: './forum-listing.component.html',
  styleUrls: ['./forum-listing.component.scss']
})
export class ForumListingComponent implements OnInit {

  tableSource = new ForumTableDataSource();
  forumData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  total: any;
  constructor(
    private $forum: ForumService,
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
    this.$forum.queryData(params).then(res => {
      this.forumData = res.data['list'];
      this.total = res.data['total'];
      this.setUpTableResource(this.forumData);
    });
  }


  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateUsers();
  }

  onActionHandler(id: string, action: ActionType) {
    const index = this.forumData.findIndex(user => user._id === id);
    this.$confirmBox.listAction('forum', action == 'active' ? 'Active' : (action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$forum.updateStatus(id, action).then((res) => {
            this.$utility.success(res.message);
            this.handleActions(action, index);
          });
        }
      });
  }

  handleActions(action: ActionType, index) {
    switch (action) {
      case 'deleted':
        this.forumData.splice(index, 1);
        this.forumData.total = this.forumData.total - 1;
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
    this.setUpTableResource(this.forumData);
  }

  handleStatus(action: 'blocked' | 'active', index: number) {
    this.forumData = this.forumData.map((user, i) => {
      if (i === index) {
        user.status = action;
      }
      return user;
    });
  }

  setUpTableResource(userRecords) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new ForumTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords,
      total: this.total
    });
  }


  onAdd() {
    this.$router.navigate([`${ADD_FORUM.fullUrl}`]);
  }

  onDetails(id: string, type: string) {
    this.$router.navigate([`${FORUM.fullUrl}`, id, 'details'],
      {
        queryParams: { type }
      }
    );
  }

  /**
   * Edit Handler
   * @param id
   */
  oneditHandler(id: string, type: string) {
    if (type == 'user') {
      return;
    }
    this.$router.navigate([`${FORUM.fullUrl}`, 'edit', id],
      {
        queryParams: { type }
      });
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


  onReportProblem(id: string, count: number, type = REPORT_TYPE.FORUM) {
    if (!count) {
      return;
    }
    this.$common.onReportProblemHandler(id, type).then(res => {
      if (res && res.data) {
        this.$matDailog.open(ReportProblemComponent, {
          width: '500px',
          data: res.data['data']
        }).afterClosed().subscribe();
      }
    });
  }

  onImageClick(image, type = 1) {
    if (!image) {
      return;
    }
    this.$matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: {image, type}
    }).afterClosed().subscribe();
  }
}
