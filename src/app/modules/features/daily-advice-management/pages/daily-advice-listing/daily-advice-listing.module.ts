import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyAdviceListingComponent } from './view/daily-advice-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { TableModule } from 'src/app/modules/commonTable/table';
import { DailyAdviceManagementServiceResolve } from '../../service/daily-advice-management.service';
import { DailyAdviceFilterComponent } from './component/daily-advice-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: DailyAdviceListingComponent
  }
];

@NgModule({
  declarations: [DailyAdviceListingComponent, DailyAdviceFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
  entryComponents : [DailyAdviceFilterComponent]
})
export class DailyAdviceListingModule { }
