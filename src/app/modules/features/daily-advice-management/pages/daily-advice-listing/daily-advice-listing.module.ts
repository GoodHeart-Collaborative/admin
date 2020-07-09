import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyAdviceListingComponent } from './view/daily-advice-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { TableModule } from 'src/app/modules/commonTable/table';

const routes: Routes = [
  {
    path: '',
    component: DailyAdviceListingComponent
  }
];

@NgModule({
  declarations: [DailyAdviceListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule
  ]
})
export class DailyAdviceListingModule { }
