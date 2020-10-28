import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTopicsComponent } from './user-topics.component';
import { UserTopicDetailModule } from './user-topic-detail/user-topic-detail.module';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { UsersService } from '../../../service/users.service';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { ListingFilterComponent } from './component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule, MatSelectModule } from '@angular/material';

const routes: Routes = [
];

@NgModule({
  declarations: [UserTopicsComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    CustomImageModule,
    LikeActionModule,
    CommentsModule,
    ReportProblemModule,
    ViewFullImageModule,
    DateFilterModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [UsersService],
  exports : [UserTopicsComponent],
  entryComponents: [ListingFilterComponent]
})
export class UserTopicsModule { }
