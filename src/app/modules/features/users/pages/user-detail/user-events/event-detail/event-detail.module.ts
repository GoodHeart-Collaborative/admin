import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

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
    MatIconModule
  ],
  exports: [
    EventDetailComponent
  ]
})
export class EventDetailModule { }
