import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatTabChangeEvent } from '@angular/material';
import { ExpertDetailsService } from '../service/expert-details.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';

@Component({
  selector: 'app-expert-details',
  templateUrl: './expert-details.component.html',
  styleUrls: ['./expert-details.component.scss']
})
export class ExpertDetailsComponent implements OnInit {
  details: any ;
  index: number  ;

  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  expertListingData: any;
  constructor(
    private $router: Router,
    activateRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $expert: ExpertDetailsService
  ) {
    this.details = activateRoute.parent.snapshot.data.expertData.data[0];
    $breadcrumb.replace(this.details._id, this.details.name);
   }

  ngOnInit() {
  }

  onAddContent() {
    this.$router.navigate([`admin/expert/${this.details._id}`, 'add']);
  }

/**
 * Tab Changes
 * @param event
 */
  onTabChange(event: MatTabChangeEvent) {
    this.index = event.index;
    this.updateList(this.index);

  }
/**
 * API Hit for List
 */
  updateList(index?: number) {
    if (!index ) {
        return;
    }
    const { pageIndex, pageSize, searchText, filterData, sortData } = this.eventData;
    let params = {
      page: `${pageIndex + 1}`,
      limit: `${pageSize}`,
      privacy: `public`,
      contentId: `${this.index}`,
      expertId: `${this.details._id}`
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
    this.$expert.queryData(params).then(res => {
      this.expertListingData = res.data;
      console.log(res);
    });
  }

/**
 * Changes on List event
 * @param event
 */
  onOptionChange(event) {
    this.eventData = event;
    this.updateList(this.index);
  }


}
