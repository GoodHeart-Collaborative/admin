import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCategoryListingComponent } from './view/event-category-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatIconModule, MatSelectModule, MatOptionModule, MatFormFieldModule } from '@angular/material';
import { ConfirmBoxModule } from 'src/app/modules/shared/confirm-box';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';

const routes: Routes = [
  {path: '' ,
   component: EventCategoryListingComponent
  },
];

@NgModule({
  declarations: [EventCategoryListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    CustomImageModule,
    DateFilterModule,
    MatIconModule,
    ConfirmBoxModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ViewFullImageModule
  ]
})
export class EventCategoryListingModule { }
