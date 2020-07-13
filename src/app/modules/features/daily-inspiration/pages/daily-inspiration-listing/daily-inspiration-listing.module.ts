import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyInspirationListingComponent } from './view/daily-inspiration-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { DailyInspirationService } from '../../service/daily-inspiration.service';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { DailyInspirationFilterComponent } from './component/daily-inspiration-filter.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    CustomDatePipeModule,
    DateFilterModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents : [DailyInspirationFilterComponent],

  providers: [DailyInspirationService]
})
export class DailyInspirationListingModule { }
