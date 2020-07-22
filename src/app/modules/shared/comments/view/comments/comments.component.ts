import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CommonService } from '../../../services/common.service';
import { UtilityService } from '../../../services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(
    private $dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDailog: MatDialog,
    private $common: CommonService,
    private $utility: UtilityService,
    private $router: Router
  ) { }

  ngOnInit() {
  }

}
