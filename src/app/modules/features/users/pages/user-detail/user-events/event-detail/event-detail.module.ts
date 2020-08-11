import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { UserEventService, UserEventServiceResolve } from '../service/user-event.service';

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
    CustomImageModule
  ],
  exports: [
    EventDetailComponent
  ],
  providers: [UserEventService],

})
export class EventDetailModule { }
