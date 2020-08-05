import { Component, OnInit } from '@angular/core';
import * as Table from 'src/app/modules/commonTable/table/interfaces/index';
import { RelatedCategoryTableDataSource } from '../model/index';
import { CategoryManagementService } from '../../../service/category-management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { USER, CATEGORY } from 'src/app/constant/routes';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommentsComponent } from 'src/app/modules/shared/comments/view/comments/comments.component';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/modules/shared/services/common.service';
export type ActionType = 'deleted' | 'blocked' | 'active';

@Component({
  selector: 'app-related-category-post',
  templateUrl: './related-category-post.component.html',
  styleUrls: ['./related-category-post.component.scss']
})
export class RelatedCategoryPostComponent implements OnInit {

  tableSource = new RelatedCategoryTableDataSource();
  userData: any;
  eventData: Table.OptionData = {
    pageIndex: 0,
    pageSize: 10,
    searchText: null,
    filterData: null,
    sortData: null
  };
  categoryId: string;
  constructor(
    private $category: CategoryManagementService,
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    $activeRoute: ActivatedRoute,
    private $breadcrum: BreadcrumbService,
    private $matDailog: MatDialog,
    private $common: CommonService
  ) {
    this.categoryId = $activeRoute.snapshot.params.id;
    this.updateUsers();
  }

  ngOnInit() {}

  updateUsers() {
    const { pageIndex, pageSize, searchText, filterData, sortData } = this.eventData;
    let params = {
      page: `${pageIndex + 1}`,
      limit: `${pageSize}`,
      categoryId: this.categoryId
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
      console.log(sortData);
      params['sortOrder'] = sortData.sortOrder;
      params['sortBy'] = sortData.sortBy;
    }
    this.$category.queryUpadteData(params).then(res => {
      this.userData = res.data;
      // if (this.userData && this.userData.data[0]) {
      //   this.$breadcrum.replace(this.categoryId, this.userData.data[0].topic || 'unkown');
      // }
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
    this.$confirmBox.listAction('category', action == 'active' ? 'Active' : (action == 'deleted' ? 'Delete' : 'Block'))
      .subscribe((confirm) => {
        if (confirm) {
          this.$category.updatePostStatus(id, action).then((res) => {
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
    this.tableSource = new RelatedCategoryTableDataSource({
      pageIndex,
      pageSize,
      rows: userRecords['data'],
      total: userRecords['total']
    });
  }

  categoryDetailsHandler(id: string) {
    this.$router.navigate([`${CATEGORY.fullUrl}`, id, id, 'details']);
  }

  /**
   * ON LIKE Handler
   * @param id
   */
  likeHandler(id: string, likesCount: number) {
    const params = {
      pageNo: 1,
      limit: 100,
      postId: id
    };
    this.$common.onLikeHandler(params).then(res => {
      const like = res.data['list'];
      this.onlikeHandler(like, likesCount);
    });
  }

/**
 * user Like Handler
 * @param id
 */
  onlikeHandler(like: any, likesCount: number) {
    if (!likesCount) {
      return;
    }
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: like
    }).afterClosed().subscribe();
  }

  onCommentsHandler(id: string, commentCount: number) {
    if (!commentCount) {
      return;
    }
    this.$matDailog.open(CommentsComponent, {
      width: '500px',
      data: id
    }).afterClosed().subscribe();
  }

}
