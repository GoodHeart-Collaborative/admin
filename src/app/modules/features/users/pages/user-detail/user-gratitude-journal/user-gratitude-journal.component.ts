import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
export type ActionType = 'deleted' | 'blocked' | 'active';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { GratitudeTableDataSource } from './model';
import { UserGratitudeJournalService } from './service/user-gratitude-journal.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { CommentsComponent } from 'src/app/modules/shared/comments/view/comments/comments.component';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-user-gratitude-journal',
  templateUrl: './user-gratitude-journal.component.html',
  styleUrls: ['./user-gratitude-journal.component.scss']
})
export class UserGratitudeJournalComponent implements OnInit, OnChanges {
  tableSource = new GratitudeTableDataSource();
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  isProcessing = false;
  @Input() userData;
  @Input() userId;
  @Output() changeHandler = new EventEmitter();

  constructor(
    private $router: Router,
    private $userService: UserGratitudeJournalService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $global: GlobalService,
    private $common: CommonService,
    private $matDailog: MatDialog
  ) {
  }

  ngOnInit() { }

  ngOnChanges() {
    this.setUpTableResource(this.userData);
  }

  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.changeHandler.emit(this.eventData);
  }

  /**
   * User Action Handler
   * @param id
   * @param action
   */
  onActionHandler(id: string, action: ActionType, privacy: string) {
    if (privacy == 'private') {
      return;
    }
    const index = this.userData.data.findIndex(user => user._id === id);
    this.$confirmBox.listAction('gratitude', action == 'active' ? 'Active' : (action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$userService.updateStatus(id, action).then((res) => {
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
  handleActions(action: ActionType, index: number) {
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
  setUpTableResource(userDetails: any) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new GratitudeTableDataSource({
      pageIndex,
      pageSize,
      rows: userDetails.data,
      total: userDetails.total
    });
  }

  /**
   * Detail page navigation
   * @param id
   */
  onDetailsHandler(id: string, privacy: string) {
    if (privacy == 'private') {
      return;
    }
    const userId = this.$global.encodeData(this.userId);
    this.$router.navigate([`admin/users/${id}/gratitude/details`],
      { queryParams: { userId } }
    );
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
}
