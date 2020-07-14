import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-full-image',
  templateUrl: './view-full-image.component.html',
  styleUrls: ['./view-full-image.component.scss']
})
export class ViewFullImageComponent implements OnInit {

  constructor(
              private $dialogRef: MatDialogRef<ViewFullImageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
