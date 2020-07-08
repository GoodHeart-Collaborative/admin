import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyInspirationRoutingModule } from './daily-inspiration-routing.module';
import { DailyInspirationComponent } from './view/daily-inspiration.component';
import { DailyInspirationServiceResolve } from './service/daily-inspiration.service';


@NgModule({
  declarations: [DailyInspirationComponent],
  imports: [
    CommonModule,
    DailyInspirationRoutingModule
  ],
  providers: [DailyInspirationServiceResolve]
})
export class DailyInspirationModule { }
