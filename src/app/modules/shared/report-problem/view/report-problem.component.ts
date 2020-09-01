import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-report-problem',
  templateUrl: './report-problem.component.html',
  styleUrls: ['./report-problem.component.scss']
})
export class ReportProblemComponent implements OnInit {

  constructor(
    private $dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private $common: CommonService
  ) {
    this.onReportProblem();
   }

  ngOnInit() { }

  onReportProblem() {
    
  }

}
