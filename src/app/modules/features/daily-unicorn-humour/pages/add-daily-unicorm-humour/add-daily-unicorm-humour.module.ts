import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDailyUnicormHumourComponent } from './view/add-daily-unicorm-humour.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { MediaUploadModule } from 'src/app/modules/shared/media-upload/media-upload.module';
import { MatFormFieldModule, 
  MatIconModule, MatCheckboxModule, 
  MatDatepickerModule, MatNativeDateModule, MatInputModule, 
  MatButtonModule,
  DateAdapter,
  MAT_DATE_FORMATS
} from '@angular/material';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
import { EditProfileService } from '../../../admin/edit-profile/service/edit-profile.service';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/constant/format-datepicker';


const routes: Routes = [
  {
    path: '',
    component: AddDailyUnicormHumourComponent
  }
];


@NgModule({
  declarations: [AddDailyUnicormHumourComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomImageModule,
    MediaUploadModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    CustomImageModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    WhiteSpaceModule
  ],
  providers: [EditProfileService,
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class AddDailyUnicormHumourModule { }
