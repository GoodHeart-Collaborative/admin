import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ShoutoutsTableDataSource } from '../model';
export type ActionType = 'deleted' | 'blocked' | 'active';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { FeedService } from '../../../service/feed.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { Router } from '@angular/router';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-shoutouts-listing',
  templateUrl: './shoutouts-listing.component.html',
  styleUrls: ['./shoutouts-listing.component.scss']
})
export class ShoutoutsListingComponent implements OnInit , OnChanges{

  tableSource = new ShoutoutsTableDataSource();
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  isProcessing = false;
  @Input() shoutOutsDetails;
  @Output() changeHandler = new EventEmitter();

  constructor(
    private $feed: FeedService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $router: Router,
    private $matDailog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.shoutOutsDetails) {
      this.setUpTableResource(this.shoutOutsDetails);
      console.log(this.shoutOutsDetails);
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
    const index = this.shoutOutsDetails.data.findIndex(user => user._id === id);
    this.$confirmBox.listAction('gratitude', action == 'active' ? 'Active' : (action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$feed.updateStatus(id, action).then((res) => {
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
        this.shoutOutsDetails.data.splice(index, 1);
        this.shoutOutsDetails.total = this.shoutOutsDetails.total - 1;
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
    this.setUpTableResource(this.shoutOutsDetails);
  }

  handleStatus(action: 'blocked' | 'active', index: number) {
    this.shoutOutsDetails.data = this.shoutOutsDetails.data.map((user, i) => {
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
    this.tableSource = new ShoutoutsTableDataSource({
      pageIndex,
      pageSize,
      rows: userDetails.data,
      total: userDetails.total
    });
  }

  onUserDetail(id: string) {
    this.$router.navigate([`admin/users/${id}/details`]);
  }

  openGif(image: string ) {
    console.log(image);
    
    this.$matDailog.open(ViewFullImageComponent, {
      width: '500px',
      data: {image , type: 0}
    }).afterClosed().subscribe();
  }
}
