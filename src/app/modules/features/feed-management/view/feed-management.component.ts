import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { FeedService } from '../service/feed.service';
import { FEED_TYPE } from 'src/app/constant/drawer';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';


@Component({
  selector: 'app-feed-management',
  templateUrl: './feed-management.component.html',
  styleUrls: ['./feed-management.component.scss']
})
export class FeedManagementComponent implements OnInit {
  index = 0;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  feedType = {
    0: FEED_TYPE.GRATITUDE,
    1: FEED_TYPE.SHOUTOUTS,
    2: FEED_TYPE.SHOUTOUTS
  };
  gratitudeDetails: any;
  shoutOutsDetails: any;

  constructor(
    private $feed: FeedService,
  ) {
    
    this.updateList(this.index);

  }

  ngOnInit() {

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
    params['type'] = this.feedType[index];
    this.$feed.queryData(params).then(res => {
    this.responseHander(index, res);
    });
  }

  responseHander(tabIndex: number, response) {
    switch (tabIndex) {
      case 0: {
        this.gratitudeDetails = response.data;
        break;
      }
      case 1: {
        break;
      }
      case 2: {
        this.shoutOutsDetails = response.data;
        break;
      }
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
    console.log(this.eventData);
    this.updateList(this.index);
  }



  /**
   * Tab Changes
   *
   */
  onTabChange(event: MatTabChangeEvent) {
    this.index = event.index;
    this.updateList(this.index);
  }
}
