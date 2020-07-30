import { Component, OnInit } from '@angular/core';
import { UserTableDataSource } from '../../../model/index';
import { UsersService } from '../../../service/users.service';
import { Router } from '@angular/router';
import { USER } from 'src/app/constant/routes';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { MatDialog } from '@angular/material';

export type ActionType = 'deleted' | 'blocked' | 'active' | 'pending';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  tableSource = new UserTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  statusCount: any;
  constructor(
    private $router: Router,
    private $userService: UsersService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private matDailog: MatDialog
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
    this.$userService.queryData(params).then(res => {
      this.statusCount = res.data
      this.userData = res.data['data'];
      this.setUpTableResource(this.userData);
    });
  }

  /**
   * Detail User
   * @param id
   */
  onDetailsHandler(id) {
    this.$router.navigate([USER.fullUrl, id, 'details']);
  }
  /**
   * Listing Pagination Hnadler
   * @param event
   */
  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    console.log(this.eventData);

    this.updateUsers();
  }

  /**
   * User Action Handler
   *
   */
  onActionHandler(id: string, action: ActionType) {
    const index = this.userData.data.findIndex(user => user._id === id);
    this.$confirmBox.listAction('user',
      (action == 'active') ? 'active' :
        (action == 'deleted' ? 'delete' : 'block'))
      .subscribe((confirm) => {
        if (confirm) {
          const params = {
            status: action
          };
          this.$userService.onVerifiedHnadler(id, params).then((res) => {
            this.$utility.success(res.message);
            this.handleActions(action, index);
          });
        }
      });
  }

  /**
   * Action Update Handler
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
   *
   */
  setUpTableResource(userRecords) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new UserTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }
  /**
   * Verify User Handler
   *
   */
  onverifyHandler(id, status) {
    this.$confirmBox.listAction('user', `${status == 'verified' ? 'verify' : 'reject'}`).subscribe((confirm) => {
      if (confirm) {
        const params = {
          adminStatus: status
        };
        this.$userService.onVerifiedHnadler(id, params).then(res => {
          if (res) {
            this.updateUsers();
          }
        });

      }
    });
  }

  /**
   * Apply  User Status  filter
   *
   */
  onAdminStatusHandler(status: string) {
    if (this.eventData.filterData && this.eventData.filterData.adminStatus && this.eventData.filterData.adminStatus == status) {
      delete this.eventData.filterData.adminStatus;
    } else {
       this.eventData.filterData = {
        ...this.eventData.filterData,
        adminStatus: status
      };
    }
    this.updateUsers();
  }

  /**
   * View Fill Image
   *
   */
  onImageClick(image) {
    this.matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: image
    }).afterClosed().subscribe();
  }
}
