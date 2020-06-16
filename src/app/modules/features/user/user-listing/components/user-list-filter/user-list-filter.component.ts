import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  USER_STATUS_LIST,
  USER_COMPANY_TYPE_CONST,
} from 'src/app/constant/app-constant';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
  selector: 'app-user-list-filter',
  templateUrl: './user-list-filter.component.html',
  styleUrls: ['./user-list-filter.component.scss'],
})
export class UserListFilterComponent implements OnInit {
  userFilterObject: any = null;
  userFilterForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private utilityService: UtilityService
  ) {
    this.userFilterForm = this.getFilterForm();
    this.userFilterObject = this.createFilterObject(this.userFilterForm);
    if (data) {
      this.userFilterForm.patchValue(data);
    }
  }

  ngOnInit() {}

  getFilterForm() {
    return this.fb.group(
      {
        regStartDate: this.formService.getControl('regStartDate', false),
        regEndDate: this.formService.getControl('regStartDate', false),
        status: this.formService.getControl('regStartDate', false),
        minBooking: this.formService.getControl('minRange', false),
        maxBooking: this.formService.getControl('maxRange', false),
        companyType: this.formService.getControl('regStartDate', false),
      },
      {
        validators: this.formService.minMaxRangeValidator(
          'minBooking',
          'maxBooking'
        ),
      }
    );
    // return this.fb.group(
    //   this.formService.getFilterFormControls([
    //     'regStartDate',
    //     'regEndDate',
    //     'status',
    //     'minBooking',
    //     'maxBooking',
    //     'companyType',
    //   ]),
    //   {
    //     validators: this.formService.minMaxRangeValidator(
    //       'minBooking',
    //       'maxBooking'
    //     ),
    //   }
    // );
  }

  /*
   Creating Filter Object For All Filters
*/
  createFilterObject(form: FormGroup) {
    return {
      registrationDate: {
        label: 'Registration Date',
        fromDate: form.controls.regStartDate,
        toDate: form.controls.regEndDate,
      },
      // status: {
      //   label: "Status",
      //   list: USER_STATUS_LIST,
      //   control: form.controls.status,
      // },
      bookingRange: {
        label: 'No. of Bookings',
        min: form.controls.minBooking,
        max: form.controls.maxBooking,
      },
      companyType: {
        label: 'User Type',
        list: USER_COMPANY_TYPE_CONST,
        control: form.controls.companyType,
      },
    };
  }

  onApplyHandler() {
    if (
      this.userFilterForm.valid ||
      !this.userFilterForm.controls['maxBooking'].value
    ) {
      const filterData = { ...this.userFilterForm.value };
      this.dialogRef.close(
        this.utilityService.parseDateToTimeStamp(filterData)
      );
      this.userFilterForm.reset();
    }
  }

  resetFilter() {
    this.userFilterForm.reset();
    this.dialogRef.close({});
  }
}
