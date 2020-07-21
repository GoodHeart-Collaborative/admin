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
    // this.$member.queryData()
  }
}
