import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './view/add-event.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, 
  MatInputModule, MatSelectModule,
   MatCheckboxModule, MatDatepickerModule,
   MatNativeDateModule,
   DateAdapter,
   MAT_DATE_FORMATS} from '@angular/material';
import { ImageUploadModule } from 'src/app/modules/shared/image-upload/image-upload.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GooglePlacesModule } from 'src/app/directives/google-places/google-places.module';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/constant/format-datepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';
// export const MY_CUSTOM_FORMATS = {
//   fullPickerInput: 'YYYY-MMM-DD HH:mm:ss',
//   parseInput: 'YYYY-MMM-DD HH:mm:ss',
//   datePickerInput: 'YYYY-MMM-DD HH:mm:ss',
//   timePickerInput: 'LT',
//   monthYearLabel: 'YYYY-MMM-DD HH:mm:ss',
//   dateA11yLabel: 'YYYY-MMM-DD HH:mm:ss',
//   monthYearA11yLabel: 'YYYY-MMM-DD HH:mm:ss'
//   };

const routes: Routes = [
  {
    path: '',
    component: AddEventComponent
  }
];

@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ImageUploadModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    GooglePlacesModule,
    WhiteSpaceModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DateTimePipeModule
  ],
  providers : [ 
    //  { provide: DateAdapter, useClass: AppDateAdapter },
    // { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
      // {provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS},
  ]
})

export class AddEventModule { }
