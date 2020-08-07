import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './view/event.component';
import { EventService, EventServiceResolve } from './service/event.service';


@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ],
  providers: [EventService, EventServiceResolve]
})
export class EventModule { }
