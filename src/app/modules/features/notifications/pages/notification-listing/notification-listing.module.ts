import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListingComponent } from './view/notification-listing.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NotificationListingComponent
  }
]


@NgModule({
  declarations: [NotificationListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NotificationListingModule { }
