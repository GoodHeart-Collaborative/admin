import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { GratitudeFeedTableDataSource } from '../model';
export type ActionType = 'deleted' | 'blocked' | 'active';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { FeedService } from '../../../service/feed.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { FEED_TYPE } from 'src/app/constant/drawer';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
@Component({
  selector: 'app-gratitude-feed-listing',
  templateUrl: './gratitude-feed-listing.component.html',
  styleUrls: ['./gratitude-feed-listing.component.scss']
})
export class GratitudeFeedListingComponent implements OnInit, OnChanges {

  tableSource = new GratitudeFeedTableDataSource();
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  isProcessing = false;
  @Input() gratitudeDetails;
  @Output() changeHandler = new EventEmitter();

  constructor(
    private $feed: FeedService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $route: Router,
    private $matDailog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.gratitudeDetails) {
        this.setUpTableResource(this.gratitudeDetails);
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
  onActionHandler(id: string, action: ActionType, privacy: string) {
    if (privacy == 'private') {
      return;
    }
    const index = this.gratitudeDetails.list.findIndex(user => user._id === id);
    this.$confirmBox.listAction('gratitude', action == 'active' ? 'Active' : (action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          const params = {
            status: action,
            type: FEED_TYPE.GRATITUDE
          }
          this.$feed.updateStatus(id, params).then((res) => {
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
        this.gratitudeDetails.list.splice(index, 1);
        this.gratitudeDetails.total = this.gratitudeDetails.total - 1;
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
    this.setUpTableResource(this.gratitudeDetails);
  }

  handleStatus(action: 'blocked' | 'active', index: number) {
    this.gratitudeDetails.list = this.gratitudeDetails.list.map((user, i) => {
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
    this.tableSource = new GratitudeFeedTableDataSource({
      pageIndex,
      pageSize,
      rows: userDetails.list,
      total: userDetails.total
    });
  }

  onUserDetail(id: string) {
    this.$route.navigate([`admin/users/${id}/details`]);
  }

  onImageClick(image, type) {
    if (!image) {
      return;
    }
    this.$matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: {image, type}
    }).afterClosed().subscribe();
  }

}
