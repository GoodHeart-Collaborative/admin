import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyAdviceListingComponent } from './view/daily-advice-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { TableModule } from 'src/app/modules/commonTable/table';
import { DailyAdviceManagementServiceResolve } from '../../service/daily-advice-management.service';
import { DailyAdviceFilterComponent } from './component/daily-advice-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';

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
    MatSelectModule,
    ReactiveFormsModule,
    LikeActionModule,
    CommentsModule,
    ViewFullImageModule,
    CustomImageModule,
    MatDialogModule,
    ReportProblemModule
  ],
  entryComponents : [DailyAdviceFilterComponent]
})
export class DailyAdviceListingModule { }
