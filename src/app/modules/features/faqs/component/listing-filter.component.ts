import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-listing-filter',
  templateUrl: './listing-filter.component.html',
  styleUrls: ['./listing-filter.component.scss']
})
export class ListingFilterComponent implements OnInit {

  dateFilterObject = {
    label: 'Event Date Filter',
    maxFromDate: new Date(),
  };
  filterForm: FormGroup;
  statusList = [{
    view: 'Active', value: 'active'
  },
  { view: 'Blocked', value: 'blocked' },
  ];
  isProcessing = true;
  constructor(
    private $fb: FormBuilder,
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) data: any,
  ) {
    this.getFilterForm();
    this.dateFilterObject = { ...this.dateFilterObject, ...this.filterForm.controls };
    if (data) {
      this.filterForm.patchValue(data);
    }
  }

  ngOnInit() {
  }

  getFilterForm() {
    this.filterForm = this.$fb.group(
      {
        fromDate: [],
        toDate: [],
        // status: []
      },
    );
  }

  onApplyHandler() {
    if (this.filterForm.valid) {
      this.isProcessing = false;
      const filterData = { ...this.filterForm.value };
      this.dialogRef.close(filterData);
    }
  }

  resetFilter() {
    if (Object.values(this.filterForm.value).every(el => el == null)) {
      this.dialogRef.close();
      return;
    }
    this.filterForm.reset();
    const filterData = { ...this.filterForm.value };
    this.dialogRef.close(filterData);
  }


}
