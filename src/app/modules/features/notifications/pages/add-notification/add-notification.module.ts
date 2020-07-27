import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotificationComponent } from './view/add-notification.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddNotificationComponent
  }
];

@NgModule({
  declarations: [AddNotificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AddNotificationModule { }
