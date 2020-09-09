import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationDetailsComponent } from './view/notification-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationDetailsComponent
  }
];


@NgModule({
  declarations: [NotificationDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatRadioModule,
    CustomImageModule,
    CustomDatePipeModule
  ]
})
export class NotificationDetailsModule { }
