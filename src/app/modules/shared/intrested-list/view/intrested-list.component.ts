import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-intrested-list',
  templateUrl: './intrested-list.component.html',
  styleUrls: ['./intrested-list.component.scss']
})
export class IntrestedListComponent implements OnInit {

  constructor(
    private $dialogRef: MatDialogRef<IntrestedListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = {},
  ) { }

  ngOnInit() {
  }

}
