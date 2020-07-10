import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-member-of-the-day',
  templateUrl: './add-member-of-the-day.component.html',
  styleUrls: ['./add-member-of-the-day.component.scss']
})
export class AddMemberOfTheDayComponent implements OnInit {

  constructor(
    private $dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
  ) { }

  ngOnInit() {
  }

}
