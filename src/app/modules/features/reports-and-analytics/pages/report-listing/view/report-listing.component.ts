import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ReportTableDataSource } from '../model';
import { Router } from '@angular/router';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { MatDialog } from '@angular/material';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { FORUM } from 'src/app/constant/routes';
import { REPORT_MESSAGE } from 'src/app/constant/app-constant';
export type ActionType = 'deleted' | 'blocked' | 'active';
@Component({
  selector: 'app-report-listing',
  templateUrl: './report-listing.component.html',
  styleUrls: ['./report-listing.component.scss']
})
export class ReportListingComponent implements OnInit, OnChanges {

  tableSource = new ReportTableDataSource();
  REPORT_MESSAGE = REPORT_MESSAGE;
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



  /**
   * User Set Up Table Handler
   * @param userRecords
   */
  setUpTableResource(userDetails: any) {
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

  onUserDetails(id: String) {
    this.$router.navigate([`admin/users/${id}/details`]);
  }

  onPostDetails(id: string, type: string) {
    this.$router.navigate([`${FORUM.fullUrl}`, id, 'details'],
    {
      queryParams: { type }
    }
  );  }

}
