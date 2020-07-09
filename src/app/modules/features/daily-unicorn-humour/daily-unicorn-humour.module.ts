import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyUnicornHumourRoutingModule } from './daily-unicorn-humour-routing.module';
import { DailyUnicornHumourComponent } from './view/daily-unicorn-humour.component';
import { DailyUnicornHumourServiceResolve } from './service/daily-unicorn-humour.service';


@NgModule({
  declarations: [DailyUnicornHumourComponent],
  imports: [
    CommonModule,
    DailyUnicornHumourRoutingModule
  ],
  providers : [DailyUnicornHumourServiceResolve]
})
export class DailyUnicornHumourModule { }
