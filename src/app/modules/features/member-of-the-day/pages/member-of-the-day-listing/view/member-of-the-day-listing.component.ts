import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddMemberOfTheDayModule } from '../../add-member-of-the-day/add-member-of-the-day.module';
import { AddMemberOfTheDayComponent } from '../../add-member-of-the-day/view/add-member-of-the-day.component';

@Component({
  selector: 'app-member-of-the-day-listing',
  templateUrl: './member-of-the-day-listing.component.html',
  styleUrls: ['./member-of-the-day-listing.component.scss']
})
export class MemberOfTheDayListingComponent implements OnInit {

  constructor(
    private $matDailog: MatDialog
    ) { }

  ngOnInit() {
  }

  onAdd() {
    const dialogRef = this.$matDailog.open(AddMemberOfTheDayComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }
}
