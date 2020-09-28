import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumListingComponent } from './view/forum-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ListingFilterComponent } from '../../pages/forum-listing/component/listing-filter.component';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';

const routes: Routes = [
  {
    path: '',
    component: ForumListingComponent
  }
];

@NgModule({
  declarations: [ForumListingComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    MatSelectModule,
    ReactiveFormsModule,
    LikeActionModule,
    CommentsModule,
    ReportProblemModule,
    ViewFullImageModule,
    CustomImageModule
  ],
  entryComponents: [ListingFilterComponent]
})
export class ForumListingModule { }
