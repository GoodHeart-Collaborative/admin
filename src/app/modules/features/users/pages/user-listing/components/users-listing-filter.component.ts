import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-users-listing-filter',
  templateUrl: './users-listing-filter.component.html',
  styleUrls: ['./users-listing-filter.component.scss']
})
export class UsersListingFilterComponent implements OnInit {
  dateFilterObject = {
    label: 'User Date Filter',
    maxFromDate: new Date(),
  };
  userFilterForm: FormGroup;
  isProcessing = true;
  constructor(
     private $fb: FormBuilder,
     private dialogRef: MatDialogRef<UsersListingFilterComponent>,
     @Inject(MAT_DIALOG_DATA) data: any,
  ) {
    this.getFilterForm();
    this.dateFilterObject = {...this.dateFilterObject, ...this.userFilterForm.controls};
    if (data) {
       this.userFilterForm.patchValue(data);
    }
  }

  ngOnInit() {
  }

  getFilterForm() {
    this.userFilterForm = this.$fb.group(
      {
        fromDate: [],
        toDate: []
      },
    );
  }

  onApplyHandler() {
   if (this.userFilterForm.valid && this.userFilterForm.touched) {
      this.isProcessing = false;
      const filterData = { ...this.userFilterForm.value};
      this.dialogRef.close(filterData);
    }
  }

  resetFilter() {
    this.userFilterForm.reset();
    const filterData = { ...this.userFilterForm.value};
    this.dialogRef.close(filterData);
  }
}
