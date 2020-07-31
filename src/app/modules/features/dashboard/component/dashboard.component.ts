import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/modules/shared/services/common.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboardForm: FormGroup;
  displayValue: string;
  displayValueList = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
  filterObject;
  minDate: Date;
  data: any;
  color;
  mode;
  tableAnimate: boolean = false;
  totalUsersCardAnimate: boolean = false;
  memberList: any;
  params = {
    page: 1,
    limit: 3,
  };
  scroll: boolean = false;
  totalPage: number;
  activePage: number;
  isFlag: boolean;
  rightSideScrollerFixed: boolean;
  rightSideHeightValue: any;
  rightSideHeight: any;
  userList: any;
  year = new Date().getFullYear();
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {}


  constructor(
    private $dashboardService: DashboardService,
    private $common: CommonService,
    router: Router) {
    // console.log(router.url.split('/').slice(-1)[0]);
    // if (router.url.split('/').slice(-1)[0] == 'dashboard') {
    //   this.isFlag = true;
    // }
    this.$common.dashBoardFlag$.next(true);
    this.onDrashboardHandler();
  }

  ngOnInit() {
    this.recentUserList();
    this.memberOfTheDayList(4);
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    if (window.pageYOffset > 200) {
      this.tableAnimate = true;
      this.totalUsersCardAnimate = true;
    }
  }

  onDrashboardHandler() {
    this.$dashboardService.onDrashboardHandler().then(res => {
      this.data = res.data;
    });
  }

  memberOfTheDayList(count: any, id?: string) {
    this.params.limit = count;
    this.$common.querymemberData(this.params).then(res => {
      if (id) {
        this.memberList = res.data['data'].filter(el => el._id != id);
        return;
      }
      this.memberList = res.data['data'];
    });
  }

  recentUserList() {
    this.$common.queryUserData(this.params).then(res => {
      this.userList = res.data['data'].data;
    });
  }

  // onCloseMember(id: string) {
  //   this.memberOfTheDayList(5, id);
  // }

  ngOnDestroy() {
    this.$common.dashBoardFlag$.next(false);
  }

}


  // onPrevPage() {
  //   if (this.params.page > 1) {
  //     this.params.page--;
  //     this.memberOfTheDayList();
  //   }
  //   console.log(this.params);
  // }

  // onNextPage() {
  //   if (this.params.page < this.totalPage) {
  //     this.params.page++;
  //     this.memberOfTheDayList();
  //   }
  //   console.log(this.params);

  // }