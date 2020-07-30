import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyUnicornHumourListingComponent } from './view/daily-unicorn-humour-listing.component';
import { Routes,  RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DailyUnicormHumourDetailsModule } from '../daily-unicorm-humour-details/daily-unicorm-humour-details.module';
import { DailyUnicornFilterComponent } from './component/daily-unicorn-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';


const routes: Routes = [
  {
    path: '',
    component: DailyUnicornHumourListingComponent
  }
];

@NgModule({
  declarations: [DailyUnicornHumourListingComponent, DailyUnicornFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DailyUnicormHumourDetailsModule,
    DateFilterModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommentsModule,
    ViewFullImageModule,
    CustomImageModule
  ],
  entryComponents: [DailyUnicornFilterComponent]
})
export class DailyUnicormHumourListingModule { }
