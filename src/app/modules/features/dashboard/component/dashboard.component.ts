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
  sectionFeatures: boolean = false;
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
    console.log(this.isFlag, 'drashbord');
    this.onDrashboardHandler();
  }

  ngOnInit() {
    this.memberOfTheDayList();
  }

  

  // @HostListener("window:scroll", [])
  // onScroll(): void {
  //   if (window.pageYOffset > 10) {
  //     this.rightSideScrollerFixed = true;
  //   } else {
  //     this.rightSideScrollerFixed = false;
  //   }
  // }



  // scrolling=(s)=>{
  //   let sc = s.target.scrollingElement.scrollTop;
  //   console.log();
  //   if(sc >=100){this.scroll=true}
  //   else{this.scroll=false}
  // }

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

  // @HostListener("window:scroll(event)", [])
  // onScroll(event: any){
  //   if (window.pageYOffset > 20) {
  //     console.log('offset' +  event.target.offsetHeight);
  //     console.log('top' + event.target.scrollTop);
  //     console.log(window.scrollY);
  //     // console.log(window.scrollTop);
  //     this.sectionFeatures = true;
  //     console.log(this.sectionFeatures);
  //   }
  // }

  // @HostListener("window:scroll", ["$event"])
  //   onWindowScroll() {
  //   let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  //   let max = document.documentElement.scrollHeight;
  //   console.log('max');
  // }


  // @HostListener("window:scroll", [])
  // onScroll(): void {
  //   console.log('sefhydgsduyf');
  //   if (window.pageYOffset > 20) {
  //     this.sectionFeatures = true;
  //   } else {
  //     this.sectionFeatures = false;
  //   }
  // }

  // @HostListener('scroll', ['$event.target'])
  // onClick(btn) {
  //   console.log('button', btn, 'number of clicks:');
  // }

  

  // @HostListener('window:scroll', ['$event']) 
  // doSomething(event) {
  //   console.debug("Scroll Event", window.pageYOffset );
  //   }

  
}
