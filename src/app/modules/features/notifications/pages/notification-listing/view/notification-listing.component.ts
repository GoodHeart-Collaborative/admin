import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_NOTIFICATIONS, NOTIFICATIONS } from 'src/app/constant/routes';
import { NotificationTableDataSource } from '../../../model';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { MatDialog } from '@angular/material';
import { NotificationsService } from '../../../service/notifications.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
export type ActionType = 'deleted' | 'blocked' | 'active';
@Component({
  selector: 'app-notification-listing',
  templateUrl: './notification-listing.component.html',
  styleUrls: ['./notification-listing.component.scss']
})
export class NotificationListingComponent implements OnInit {
  tableSource = new NotificationTableDataSource();
  notificationData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  constructor(
    private $notification: NotificationsService,
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
  ) {
  }

  ngOnInit() {
    this.updateList();
  }
/**
 * User listing Handler
 */
  updateList() {
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
    this.$notification.queryData(params).then(res => {
      this.notificationData = res.data;
      this.setUpTableResource(this.notificationData);
    });
  }
/**
 * Listing Pagination Hnadler
 * @param event
 */
  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateList();
  }

  /**
   * User Action Handler
   * @param id
   * @param action
   */
  onActionHandler(id: string, action: ActionType) {
    const index = this.notificationData.data.findIndex(user => user._id === id);
    this.$confirmBox.listAction('notification', action == 'active'  ?  'active' : ( action == 'deleted' ? 'delete' : 'block'))
    .subscribe((confirm) => {
      if (confirm) {
        this.$notification.updateStatus(id, action).then((res) => {
         //  this.$utility.success(res.message);
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
        this.notificationData.data.splice(index, 1);
        this.notificationData.total = this.notificationData.total - 1;
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
    this.setUpTableResource(this.notificationData);
  }

  handleStatus(action: 'blocked' | 'active', index: number) {
    this.notificationData.data = this.notificationData.data.map((user, i) => {
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
    this.tableSource = new NotificationTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords.data,
      total: userRecords.total
    });
  }

  onAdd() {
    this.$router.navigate([ADD_NOTIFICATIONS.fullUrl]);
  }

  onDetails(id) {
    this.$router.navigate([`${NOTIFICATIONS.fullUrl}`, id, 'details']);
  }

}
