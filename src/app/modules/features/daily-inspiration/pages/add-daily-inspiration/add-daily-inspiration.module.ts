import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDailyInspiratinComponent } from './view/add-daily-inspiratin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatIconModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: AddDailyInspiratinComponent
  }
];
@NgModule({
  declarations: [AddDailyInspiratinComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIconModule,
    MatCheckboxModule,
    CustomImageModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    CustomImageModule,
    MatNativeDateModule
  ]
})
export class AddDailyInspirationModule { }
