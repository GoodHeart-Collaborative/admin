import { Component, OnInit } from '@angular/core';
import { ReportsAndAnalyticsService } from '../service/reports-and-analytics.service';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';

@Component({
  selector: 'app-reports-and-analytics',
  templateUrl: './reports-and-analytics.component.html',
  styleUrls: ['./reports-and-analytics.component.scss']
})
export class ReportsAndAnalyticsComponent implements OnInit {

  id: string;
  userDetails: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  userData: any;
  index = 0;
  eventListData: any;
  shoutoutsListData: unknown;

  constructor(
    private $report: ReportsAndAnalyticsService,
  ) {

  }
  ngOnInit() {
    this.updateList(this.index);
  }



  /**
   * User listing Handler
   */
  updateList(index?: any) {
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
          params[key] = `${new Date(value).getTime()}`;
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
    this.onApiHandler(index , params);
   }

  onApiHandler(index , params) {
    switch (index) {
      case 0:
        params['type']= 9;
        this.$report.queryData(params).then(res => {
          this.userData = res.data;
        });
        break;
      case 1:
        params['type']= 9;
        this.$report.queryData(params).then(res => {
          this.userData = res.data;
        });
        break;
      case 2:
        // this.$report.onEventHandler(params).then(res => {
        //   this.eventListData = res.data;
        // });
        break;
      case 3:
        break;
      case 4:
        // this.$report.onShoutoutsHandler(params).then(res => {
        //   this.shoutoutsListData = res.data;
        // });
        break;
      default:
        break;
    }
  }

  /**
   * Listing Pagination Hnadler
   * @param event
   */
  onOptionChange(event) {
    this.eventData = event;
    this.updateList(this.index);
  }

  /**
   * Tab Changes
   * @param event
   */
  onTabChange(event: MatTabChangeEvent) {
    this.index = event.index;
    console.log(this.index);
    this.updateList(this.index);
  }

}
