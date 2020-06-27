import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { FormGroup } from '@angular/forms';


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

  constructor(private $dashboardService: DashboardService) {
    // this.dashboardForm = this._dashboardService.getFilterForm();
    // this.filterObject = this._dashboardService.createFilterObject(this.dashboardForm);
     this.onDrashboardHandler();
  }

  ngOnInit() {
  }

  onDrashboardHandler() {
      this.$dashboardService.onDrashboardHandler().then(res => {
        console.log(res);
        this.data = res.data;
      });
  }

}
