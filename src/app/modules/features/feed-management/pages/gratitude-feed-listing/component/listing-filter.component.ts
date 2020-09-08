import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { privacyList , statusList} from 'src/app/constant/drawer';

@Component({
  selector: 'app-listing-filter',
  templateUrl: './listing-filter.component.html',
  styleUrls: ['./listing-filter.component.scss']
})
export class ListingFilterComponent implements OnInit {

  dateFilterObject = {
    label: 'Date Range',
    maxFromDate: new Date(),
   };
  filterForm: FormGroup;
  privacyList = privacyList;
  statusList = statusList;
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
        privacy: [],
        status: []
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
    if (Object.values(this.filterForm.value).every(el => el == null)) {
      this.dialogRef.close();
      return;
    }
    this.filterForm.reset();
    const filterData = { ...this.filterForm.value};
    this.dialogRef.close(filterData);
  }


}
