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
    label: 'Date Filter',
    maxFromDate: new Date(),
   };
  filterForm: FormGroup;
  isProcessing = true;
  constructor(
     private $fb: FormBuilder,
     private dialogRef: MatDialogRef<any>,
     @Inject(MAT_DIALOG_DATA) data: any,
  ) {
    this.getFilterForm();
    this.dateFilterObject = {...this.dateFilterObject, ...this.filterForm.controls};
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
      },
    );
  }

  onApplyHandler() {
   if (this.filterForm.valid) {
      this.isProcessing = false;
      const filterData = { ...this.filterForm.value};
      this.dialogRef.close(filterData);
    }
  }

  resetFilter() {
    this.filterForm.reset();
    const filterData = { ...this.filterForm.value};
    this.dialogRef.close(filterData);
  }


}
