import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyInspirationRoutingModule } from './daily-inspiration-routing.module';
import { DailyInspirationComponent } from './view/daily-inspiration.component';


@NgModule({
  declarations: [DailyInspirationComponent],
  imports: [
    CommonModule,
    DailyInspirationRoutingModule
  ]
})
export class DailyInspirationModule { }
