import { Component, OnInit } from '@angular/core';
import {  MatDialog } from '@angular/material';
import { AddMemberOfTheDayComponent } from '../../add-member-of-the-day/view/add-member-of-the-day.component';
import { MemberOfTheDayService } from '../../../service/member-of-the-day.service';
import { MemberTableDataSource } from '../../../model';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import {  USER } from 'src/app/constant/routes';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';
export type ActionType = 'deleted' | 'blocked' | 'active';

@Component({
  selector: 'app-member-of-the-day-listing',
  templateUrl: './member-of-the-day-listing.component.html',
  styleUrls: ['./member-of-the-day-listing.component.scss']
})
export class MemberOfTheDayListingComponent implements OnInit {
  tableSource = new MemberTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  constructor(
    private $member: MemberOfTheDayService,
    private $router: Router,
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
    this.$member.queryData(params).then(res => {
      this.userData = res['data'];
      this.setUpTableResource(this.userData);
    });
  }

/**
 *  Listing Pagination Hnadler
 * @param event
 */
  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateUsers();
  }

  // onActionHandler(id: string, action: ActionType) {
  //   const index = this.userData.data.findIndex(user => user._id === id);
  //   this.$confirmBox.listAction('Advice', action).subscribe((confirm) => {
  //     if (confirm) {
  //       this.$member.updateStatus(id, action).then((res) => {
  //         // this.$utility.success(res.message);
  //         this.handleActions(action, index);
  //       });
  //     }
  //   });
  // }

  // handleActions(action: ActionType, index) {
  //   switch (action) {
  //     case 'deleted':
  //       this.userData.data.splice(index, 1);
  //       this.userData.total = this.userData.total - 1;
  //       break;
  //     case 'active':
  //       this.handleStatus(action, index);

  //       break;
  //     case 'blocked':
  //       this.handleStatus(action, index);

  //       break;
  //     default:
  //       break;
  //   }
  //   this.setUpTableResource(this.userData);
  // }

  // handleStatus(action: 'blocked' | 'active', index: number) {
  //   this.userData.data = this.userData.data.map((user, i) => {
  //     if (i === index) {
  //       user.status = action;
  //     }
  //     return user;
  //   });
  // }

  /**
   * User Set Up Table Handler
   * @param userRecords
   */
  setUpTableResource(userRecords) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new MemberTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }


/**
 * Details Handler
 * @param id
 */
  onDetails(id) {
    this.$router.navigate([`${USER.fullUrl}`, id, 'details']);
  }

  onAdd() {
    const dialogRef = this.$matDailog.open(AddMemberOfTheDayComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }

  /**
   * ON LIKE Handler
   * @param id
   */
  likeHandler(id: string, likesCount: number) {
    const params = {
      pageNo: 1,
      limit: 100,
      postId: id
    };
    this.$common.onLikeHandler(params).then(res => {
      const like = res.data['list'];
      this.onlikeHandler(like, likesCount);
    });
  }

/**
 * user Like Handler
 * @param id
 */
  onlikeHandler(like: any, likesCount: number) {
    if (!likesCount) {
      return;
    }
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: like
    }).afterClosed().subscribe();
  }

  /**
   * View Fill Image
   *
   */
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
