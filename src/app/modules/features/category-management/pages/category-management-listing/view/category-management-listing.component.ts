import { Component, OnInit } from '@angular/core';
import { CategoryTableDataSource } from '../../../models';
import { UsersService } from 'src/app/modules/features/users/service/users.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { USER, CATEGORY } from 'src/app/constant/routes';
import { CategoryManagementService } from '../../../service/category-management.service';
import { AddCategoryManagementComponent } from '../../add-category-management/view/add-category-management.component';
import { MatDialog } from '@angular/material';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
export type ActionType = 'deleted' | 'blocked' | 'active';

@Component({
  selector: 'app-category-management-listing',
  templateUrl: './category-management-listing.component.html',
  styleUrls: ['./category-management-listing.component.scss']
})
export class CategoryManagementListingComponent implements OnInit {
  tableSource = new CategoryTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };

  constructor(
    private $category: CategoryManagementService,
    private $router: Router,
    private matDailog: MatDialog,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
  
  ) {
  }

  ngOnInit() {
    this.updateUsers();
  }

  updateUsers() {
    const { pageIndex, pageSize, searchText, filterData , sortData} = this.eventData;
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
    if (searchText) {
      params['searchTerm'] = searchText;
    }
    if (sortData) {
      console.log(sortData);
      params['sortOrder'] = sortData.sortOrder;
      params['sortBy'] = sortData.sortBy;
    }
    this.$category.queryData(params).then(res => {
      this.userData = res['data'];
      this.setUpTableResource(this.userData);
    });
  }


  onDetailsHandler(id) {
    this.$router.navigate([USER.fullUrl, id, 'details']);
  }

  onOptionChange(event: Table.OptionEvent) {
    this.eventData = event.data;
    this.updateUsers();
  }

  onActionHandler(id: string, action: ActionType) {
    const index = this.userData.data.findIndex(user => user._id === id);
    this.$confirmBox.listAction('category', action == 'active'  ?  'active' : ( action == 'deleted' ? 'delete' : 'block'))
    .subscribe((confirm) => {
      if (confirm) {
        this.$category.updateStatus(id, action).then((res) => {
          this.$utility.success(res.message);
          this.handleActions(action, index);
        });
      }
    });
  }

  handleActions(action: ActionType, index) {
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

  setUpTableResource(userRecords) {
    const { pageIndex, pageSize } = this.eventData;
    this.tableSource = new CategoryTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }

onAddCategory() {
  this.matDailog.open(AddCategoryManagementComponent, {
    width: '500px',
   }).afterClosed().subscribe(res => {
    if (res) {
        this.updateUsers();
    }
  });
}

oneditHandler(id) {
  this.$category.updateCategory(id).then(res => {
      if (res) {
        this.matDailog.open(AddCategoryManagementComponent, {
          width: '500px',
          data: res.data
        }).afterClosed().subscribe(res => {
          if (res) {
              this.updateUsers();
          }
        });
      }
    }).catch(err => {
       this.$utility.errorAlert(err.message);
  });
}

relatedCategoryHandler(id) {
    this.$router.navigate([`${CATEGORY.fullUrl}`, id,]);
}

onImageClick(image) {
  this.matDailog.open(ViewFullImageComponent, {
    panelClass: 'view-full-image-modal',
    data: image
  }).afterClosed().subscribe();
}

}
