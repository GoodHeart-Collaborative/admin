import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { EventTableDataSource } from './model';
import { UserEventService } from './service/user-event.service';
import { GlobalService } from 'src/app/services/global/global.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { MatDialog } from '@angular/material';
export type ActionType = 'deleted' | 'blocked' | 'active';
@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent implements OnInit, OnChanges {
  today = new Date().getTime();
  tableSource = new EventTableDataSource();
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  isProcessing = false;
  @Input() userData;
  @Output() changeHandler = new EventEmitter();
  @Input() userId;
  constructor(
    private $router: Router,
    private $userService: UserEventService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $global: GlobalService,
    private $matDailog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.userData) {
      this.setUpTableResource(this.userData);
    }
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
  onActionHandler(id: string, action: ActionType, endDate ) {
    if (this.today > endDate) {
      return;
    }
    const index = this.userData.list.findIndex(user => user._id === id);
    this.$confirmBox.listAction('user-event', action == 'active' ? 'Active' : (action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$userService.updateEventStatus(id, action).then((res) => {
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
        this.userData.list.splice(index, 1);
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
    this.tableSource = new EventTableDataSource({
      pageIndex,
      pageSize,
      rows: userDetails.list,
      total: userDetails.total
    });
  }

  onDetailsHandler(id: string) {
    const userId = this.$global.encodeData(this.userId);
    this.$router.navigate([`admin/users/${id}/event/details`],
      { queryParams: { userId }}
    );
  }

  onImageClick(image, type = 1) {
    if (!image) {
      return;
    }
    this.$matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: { image, type }
    }).afterClosed().subscribe();
  }

}
