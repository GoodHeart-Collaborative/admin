import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyUnicornHumourListingComponent } from './view/daily-unicorn-humour-listing.component';
import { Routes,  RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';


const routes: Routes = [
  {
    path: '',
    component: DailyUnicornHumourListingComponent
  }
];

@NgModule({
  declarations: [DailyUnicornHumourListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule
  ]
})
export class DailyUnicormHumourListingModule { }
