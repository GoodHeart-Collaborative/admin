import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { USER } from 'src/app/constant/routes';
import { REPORT_MESSAGE } from 'src/app/constant/app-constant';

@Component({
  selector: 'app-report-problem',
  templateUrl: './report-problem.component.html',
  styleUrls: ['./report-problem.component.scss']
})
export class ReportProblemComponent implements OnInit {
  REPORT_MESSAGE = REPORT_MESSAGE;
  constructor(
    private $dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private $common: CommonService,
    private  $router: Router

  ) {
    // this.onReportProblem();
   }

  ngOnInit() { }

  // onReportProblem() {
  // }

  onSeeProfile(id: string) {
    this.$router.navigate([`${USER.fullUrl}`, id, 'details']);
    this.$dialogRef.close();
  }
}
