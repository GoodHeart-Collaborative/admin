import { Component, OnInit } from '@angular/core';
import { FaqsTableDataSource } from '../../../models';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { ContentService } from 'src/app/modules/shared/services/content.service';
import { Router } from '@angular/router';
import { ADD_FAQs } from 'src/app/constant/routes';
import { MatDialog } from '@angular/material';
import { AddFaqsComponent } from '../../add-faqs/view/add-faqs.component';
export type ActionType = 'deleted' | 'blocked' | 'active';

@Component({
  selector: 'app-faqs-listing',
  templateUrl: './faqs-listing.component.html',
  styleUrls: ['./faqs-listing.component.scss']
})
export class FaqsListingComponent implements OnInit {

  tableSource = new FaqsTableDataSource();
  faqList: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };

  constructor(
    private $content: ContentService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $dailog: MatDialog
  ) {
  }

  ngOnInit() {
    this.updateList();
  }
  /**
   * User listing Handler
   */
  updateList() {
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
    if (sortData) {
      params['sortOrder'] = sortData.sortOrder;
      params['sortBy'] = sortData.sortBy;
    }
    if (searchText) {
      params['searchKey'] = searchText;
    }
    this.$content.queryData(params).then(res => {
      this.faqList = res.data;
      this.setUpTableResource(this.faqList);
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
    const index = this.faqList.contentList.findIndex(user => user._id === id);
    this.$confirmBox.listAction('faq', (action == 'deleted' ? 'delete' : ''))
      .subscribe((confirm) => {
        if (confirm) {
          this.$content.onDeleteFaqHnadler(id).then((res) => {
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
  handleActions(action: ActionType, index) {
    switch (action) {
      case 'deleted':
        this.faqList.contentList.splice(index, 1);
        this.faqList.totalRecord = this.faqList.totalRecord - 1;
        break;
      default:
        break;
    }
    this.setUpTableResource(this.faqList);
  }


  /**
   * User Set Up Table Handler
   * @param userRecords
   */
  setUpTableResource(userRecords) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new FaqsTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords.contentList,
      total: userRecords.totalRecord
    });
  }

  onAdd() {
    this.$dailog.open(AddFaqsComponent, {
      width: '500px',
    }).afterClosed().subscribe(res => {
      if (res) {
        this.updateList();
      }
    });
  }

  oneditHandler(id: string) {
    this.$dailog.open(AddFaqsComponent, {
      width: '500px',
      data: id
    }).afterClosed().subscribe(res => {
      if (res) {
        this.updateList();
      }
    });
  }

}
