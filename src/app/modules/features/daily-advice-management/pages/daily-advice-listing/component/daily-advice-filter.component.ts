import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { statusList} from 'src/app/constant/drawer';

@Component({
  selector: 'app-daily-advice-filter',
  templateUrl: './daily-advice-filter.component.html',
  styleUrls: ['./daily-advice-filter.component.scss']
})
export class DailyAdviceFilterComponent implements OnInit {

  dateFilterObject = {
    label: 'daily pep talk Date Filter',
    maxFromDate: new Date(),
  };
  filterForm: FormGroup;
  statusList =statusList;
  isProcessing = true;
  constructor(
     private $fb: FormBuilder,
     private dialogRef: MatDialogRef<DailyAdviceFilterComponent>,
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
        status: []
      },
    );
  }

  onApplyHandler() {
   if (this.filterForm.valid && this.filterForm.touched) {
      this.isProcessing = false;
      const filterData = { ...this.filterForm.value};
      // filterData.fromDate = new Date( filterData.fromDate);
      // filterData.toDate = new Date( filterData.toDate);
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
