import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventsComponent } from './user-events.component';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailModule } from './event-detail/event-detail.module';

const routes: Routes = [
  // {path: '' , component: UserEventsComponent}
];

@NgModule({
  declarations: [UserEventsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EventDetailModule
  ],
  exports: [UserEventsComponent]
})
export class UserEventsModule { }
