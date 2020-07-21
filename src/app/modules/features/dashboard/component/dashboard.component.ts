import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { FormGroup } from '@angular/forms';
import { MemberOfTheDayService } from '../../member-of-the-day/service/member-of-the-day.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup;
  displayValue: string;
  displayValueList = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
  filterObject;
  minDate: Date;
  data: any;
  memberList: unknown;
  params = {
    page: 1,
    limit: 5,
  };
  totalPage: number;
  activePage: number;
  constructor(
    private $dashboardService: DashboardService,
    private $member: MemberOfTheDayService) {
     this.onDrashboardHandler();
  }

  ngOnInit() {
    this.memberOfTheDayList();
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
      this.params.page --;
      this.memberOfTheDayList();
    }
    console.log(this.params);
  }

  onNextPage() {
    if (this.params.page  < this.totalPage) {
      this.params.page ++;
      this.memberOfTheDayList();
    }
    console.log(this.params);

  }
}
