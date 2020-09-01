import { Component, OnInit, Input, Output , EventEmitter, OnChanges} from '@angular/core';
import { ReportTableDataSource } from '../model';
import { ReportsAndAnalyticsService } from '../../../service/reports-and-analytics.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
export type ActionType = 'deleted' | 'blocked' | 'active';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-report-listing',
  templateUrl: './report-listing.component.html',
  styleUrls: ['./report-listing.component.scss']
})
export class ReportListingComponent implements OnInit, OnChanges {

  tableSource = new ReportTableDataSource();
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

  constructor(
    private $router: Router,
    private $userService: ReportsAndAnalyticsService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $matDailog: MatDialog,
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
          // this.$userService.updateStatus(id, action).then((res) => {
          //   this.$utility.success(res.message);
          //   this.handleActions(action, index);
          // });
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
    console.log(userDetails);
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new ReportTableDataSource({
      pageIndex,
      pageSize,
      rows: userDetails.data,
      total: userDetails.total
    });
  }

  onImageClick(image, type) {
    if (!image) {
      return;
    }
    this.$matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: { image, type }
    }).afterClosed().subscribe();
  }

}
