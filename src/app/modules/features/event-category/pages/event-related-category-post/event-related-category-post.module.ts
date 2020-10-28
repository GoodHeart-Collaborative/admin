import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRelatedCategoryPostComponent } from './view/event-related-category-post.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { MatIconModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListingFilterComponent } from '../event-related-category-post/component/listing-filter.component';
import { DateTimePipeModule } from 'src/app/pipes/date-time-pipe/date-time-pipe.module';


const routes: Routes = [
  {path: '' ,
   component: EventRelatedCategoryPostComponent
  },
];
@NgModule({
  declarations: [EventRelatedCategoryPostComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    MatIconModule,
    LikeActionModule,
    CommentsModule,
    DateFilterModule,
    ViewFullImageModule,
    CustomImageModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    DateTimePipeModule
  ],
  entryComponents: [ListingFilterComponent]

})
export class EventRelatedCategoryPostModule { }
