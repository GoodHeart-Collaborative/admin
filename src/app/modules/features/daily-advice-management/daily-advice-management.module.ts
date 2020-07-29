import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyAdviceManagementRoutingModule } from './daily-advice-management-routing.module';
import { DailyAdviceManagementComponent } from './view/daily-advice-management.component';
import { DailyAdviceManagementServiceResolve, DailyAdviceManagementService } from './service/daily-advice-management.service';


@NgModule({
  declarations: [DailyAdviceManagementComponent],
  imports: [
    CommonModule,
    DailyAdviceManagementRoutingModule
  ],
  providers : [DailyAdviceManagementServiceResolve,
               DailyAdviceManagementService]
})
export class DailyAdviceManagementModule { }
