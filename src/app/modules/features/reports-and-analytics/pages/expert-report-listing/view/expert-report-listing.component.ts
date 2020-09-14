import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { ExpertReportTableDataSource } from '../model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
export type ActionType = 'deleted' | 'blocked' | 'active';
@Component({
  selector: 'app-expert-report-listing',
  templateUrl: './expert-report-listing.component.html',
  styleUrls: ['./expert-report-listing.component.scss']
})
export class ExpertReportListingComponent implements OnInit, OnChanges {
  tableSource = new ExpertReportTableDataSource();
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
    this.tableSource = new ExpertReportTableDataSource({
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

  onUserDetails(id: string) {
    this.$router.navigate([`admin/users/${id}/details`]);
  }

  onPostDetails(id: string) {
    this.$router.navigate([`admin/expert/${id}/post`]);
  }
}

