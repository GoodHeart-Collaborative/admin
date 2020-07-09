import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyAdviceManagementRoutingModule } from './daily-advice-management-routing.module';
import { DailyAdviceManagementComponent } from './view/daily-advice-management.component';


@NgModule({
  declarations: [DailyAdviceManagementComponent],
  imports: [
    CommonModule,
    DailyAdviceManagementRoutingModule
  ]
})
export class DailyAdviceManagementModule { }
