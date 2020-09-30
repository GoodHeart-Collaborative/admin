import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { UserEventService } from '../service/user-event.service';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';
import { IntrestedListModule } from 'src/app/modules/shared/intrested-list/intrested-list.module';
import { GoingListModule } from 'src/app/modules/shared/going-list/going-list.module';

const routes: Routes = [
  {
    path: '',
    component: EventDetailComponent
  }
];

@NgModule({
  declarations: [EventDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    CustomImageModule,
    DateTimePipeModule,
    IntrestedListModule,
    GoingListModule
  ],
  exports: [
    EventDetailComponent
  ],
  providers: [UserEventService],

})
export class EventDetailModule { }
