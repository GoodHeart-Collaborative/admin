import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-listing-filter',
  templateUrl: './users-listing-filter.component.html',
  styleUrls: ['./users-listing-filter.component.scss']
})
export class UsersListingFilterComponent implements OnInit {
  dateFilterObject = {
    label: 'User Date Filter',
    maxFromDate: new Date(),
  }
  constructor() { }

  ngOnInit() {
  }

  onApplyHandler() {
    // if (
    //   this.userFilterForm.valid ||
    //   !this.userFilterForm.controls['maxBooking'].value
    // ) {
    //   const filterData = { ...this.userFilterForm.value };
    //   this.dialogRef.close(
    //     this.utilityService.parseDateToTimeStamp(filterData)
    //   );
    //   this.userFilterForm.reset();
    // }
  }

  resetFilter() {
    // this.userFilterForm.reset();
    // this.dialogRef.close({});
  }
}
