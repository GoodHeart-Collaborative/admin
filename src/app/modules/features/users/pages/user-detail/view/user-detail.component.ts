import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../service/users.service';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { UserGratitudeJournalService } from '../user-gratitude-journal/service/user-gratitude-journal.service';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
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
  index: any;
  eventListData: any;

  constructor(
    private $router: ActivatedRoute,
    private $breadcrumb: BreadcrumbService,
    private $userService: UserGratitudeJournalService,
  ) {
    this.userDetails = this.$router.snapshot.data.UserDetails;
    this.$breadcrumb.replace(this.userDetails.id, this.userDetails['firstName']);
  }
  ngOnInit() {
    // this.updateUsers(index);
  }



  /**
   * User listing Handler
   */
  updateList(index?: any) {
    const { pageIndex, pageSize, searchText, filterData, sortData } = this.eventData;
    let params = {
      page: `${pageIndex + 1}`,
      limit: `${pageSize}`,
      userId: `${this.userDetails.id}`
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
    if (index == 1) {
      this.$userService.queryData(params).then(res => {
        console.log(res);
        this.userData = res.data;
      });
    }
    if (index == 2) {
      this.$userService.onEventHandler(params).then(res => {
        console.log(res);
        this.eventListData = res.data;
      });
    }

  }

  /**
   * Listing Pagination Hnadler
   * @param event
   */
  onOptionChange(event) {
    this.eventData = event;
    this.updateList();
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
