import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './view/event.component';
import { EventService } from './service/event.service';


@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ],
  providers: [EventService]
})
export class EventModule { }
