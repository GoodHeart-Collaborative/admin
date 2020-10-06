import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailsComponent } from './view/event-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { IntrestedListModule } from 'src/app/modules/shared/intrested-list/intrested-list.module';
import { GoingListModule } from 'src/app/modules/shared/going-list/going-list.module';
import { MatDialogModule } from '@angular/material';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';

const routes: Routes = [
  {
    path: '',
    component: EventDetailsComponent
  }
];

@NgModule({
  declarations: [EventDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomImageModule,
    IntrestedListModule,
    GoingListModule,
    MatDialogModule,
    DateTimePipeModule,
    ViewFullImageModule
  ]
})
export class EventDetailsModule { }
