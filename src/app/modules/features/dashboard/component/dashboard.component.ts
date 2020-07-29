import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { FormGroup } from '@angular/forms';
import { MemberOfTheDayService } from '../../member-of-the-day/service/member-of-the-day.service';
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
  memberList: unknown;
  params = {
    page: 1,
    limit: 3,
  };
  scroll:boolean=false;
  totalPage: number;
  activePage: number;
  isFlag: boolean;
  rightSideScrollerFixed: boolean;

  // @ViewChild('rightSideHeight') rightSideHeight: ElementRef;
  rightSideHeightValue: any;
  rightSideHeight: any;


  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      console.log("Scroll Event");
    }


  constructor(
    private $dashboardService: DashboardService,
    private $member: MemberOfTheDayService,
    private $common: CommonService,
    router: Router) {
    console.log(router.url.split('/').slice(-1)[0]);
    if (router.url.split('/').slice(-1)[0] == 'dashboard') {
      this.isFlag = true;
    }

    this.$common.dashBoardFlag$.next(true);
    console.log(this.isFlag, 'dashbord');
    this.onDrashboardHandler();
  }

  ngOnInit() {
    this.memberOfTheDayList();
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    if(window.pageYOffset > 200){
      this.tableAnimate = true;
      this.totalUsersCardAnimate = true;
    }
  }

  onDrashboardHandler() {
    this.$dashboardService.onDrashboardHandler().then(res => {
      this.data = res.data;
    });
  }

  memberOfTheDayList() {
    this.$member.queryData(this.params).then(res => {
      console.log(res.data);
      this.memberList = res.data['data'];
      this.totalPage = res.data['totalPage'];
    });
  }

  onPrevPage() {
    if (this.params.page > 1) {
      this.params.page--;
      this.memberOfTheDayList();
    }
    console.log(this.params);
  }

  onNextPage() {
    if (this.params.page < this.totalPage) {
      this.params.page++;
      this.memberOfTheDayList();
    }
    console.log(this.params);

  }

  ngOnDestroy() {
    this.$common.dashBoardFlag$.next(false);
  }

  
}
