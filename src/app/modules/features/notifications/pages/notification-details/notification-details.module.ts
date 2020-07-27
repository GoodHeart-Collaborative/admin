import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationDetailsComponent } from './view/notification-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material';

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
  ]
})
export class NotificationDetailsModule { }
