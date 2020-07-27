import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './view/event.component';


@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
