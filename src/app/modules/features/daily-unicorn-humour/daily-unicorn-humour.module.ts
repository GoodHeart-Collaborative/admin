import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyUnicornHumourRoutingModule } from './daily-unicorn-humour-routing.module';
import { DailyUnicornHumourComponent } from './view/daily-unicorn-humour.component';


@NgModule({
  declarations: [DailyUnicornHumourComponent],
  imports: [
    CommonModule,
    DailyUnicornHumourRoutingModule
  ]
})
export class DailyUnicornHumourModule { }
