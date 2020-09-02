import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { ExpertDetailsTableDataSource } from '../../../models';
import { ExpertDetailsService } from '../../../service/expert-details.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { MatDialog } from '@angular/material';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommentsComponent } from 'src/app/modules/shared/comments/view/comments/comments.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { ReportProblemComponent } from 'src/app/modules/shared/report-problem/view/report-problem.component';
export type ActionType = 'deleted' | 'blocked' | 'active';

@Component({
  selector: 'app-expert-details-listing',
  templateUrl: './expert-details-listing.component.html',
  styleUrls: ['./expert-details-listing.component.scss']
})
export class ExpertDetailsListingComponent implements OnInit, OnChanges {
  contentIndex: any;
  @Output() changeHandler = new EventEmitter();
  @Input() experDetails;
  @Input() expetId;

  tableSource = new ExpertDetailsTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  constructor(
    private $expert: ExpertDetailsService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $matDailog: MatDialog,
    private $common: CommonService,
    private $router: Router
  ) {
  }

  ngOnInit() { }

  ngOnChanges() {
     this.setUpTableResource(this.experDetails);
  }

  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.changeHandler.emit(this.eventData);
  }

  onActionHandler(id: string, action: ActionType) {
    const index = this.experDetails.list.findIndex(user => user._id === id);
    this.$confirmBox.listAction('expert post', action == 'active' ? 'Active' : (action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$expert.updateStatus(id, action).then((res) => {
            this.$utility.success(res.message);
            this.handleActions(action, index);
          });
        }
      });
  }

  handleActions(action: ActionType, index) {
    switch (action) {
      case 'deleted':
        this.experDetails.list.splice(index, 1);
        this.experDetails.total = this.experDetails.total - 1;
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
    this.setUpTableResource(this.experDetails);
  }

  handleStatus(action: 'blocked' | 'active', index: number) {
    this.experDetails.list = this.experDetails.list.map((user, i) => {
      if (i === index) {
        user.status = action;
      }
      return user;
    });
  }

  setUpTableResource(record) {
    console.log(record);
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new ExpertDetailsTableDataSource({
      pageIndex,
      pageSize,
      rows: record.list,
      total: record.total
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

  onCommentsHandler(id: string, commentCount: number) {
    if (!commentCount) {
      return;
    }
    this.$matDailog.open(CommentsComponent, {
      width: '500px',
      data: id
    }).afterClosed().subscribe();
  }

  oneditHandler(expertId: string, id: string) {
    console.log(expertId, 'shama');
    this.$router.navigate([`admin/expert/${expertId}/${id}`, 'edit']);
  }

  onDetails(id: string) {
    this.$router.navigate([`admin/expert/${id}`, 'post']);
  }

  onReportProblem(id: string, count: number) {
    if (!count) {
      return;
    }
    this.$common.onReportProblemHandler(id).then(res => {
      if (res && res.data) {
        this.$matDailog.open(ReportProblemComponent, {
          width: '500px',
          data: res.data['data']
        }).afterClosed().subscribe();
      }
    });
  }
}
