import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyInspirationListingComponent } from './view/daily-inspiration-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { DailyInspirationService } from '../../service/daily-inspiration.service';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DailyInspirationFilterComponent } from './daily-inspiration-filter/daily-inspiration-filter.component';


const routes: Routes = [
  {
    path: '',
    component: DailyInspirationListingComponent
  }
];

@NgModule({
  declarations: [DailyInspirationListingComponent, DailyInspirationFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule
  ],
  providers: [DailyInspirationService]
})
export class DailyInspirationListingModule { }
