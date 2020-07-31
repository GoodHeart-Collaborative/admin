import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListingComponent } from './view/notification-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';

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
    TableModule,
    CustomDatePipeModule
  ]
})
export class NotificationListingModule { }
