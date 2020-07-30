import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyInspirationListingComponent } from './view/daily-inspiration-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { DailyInspirationService } from '../../service/daily-inspiration.service';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { DailyInspirationFilterComponent } from './component/daily-inspiration-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';


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
    ReactiveFormsModule,
    MatDialogModule,
    LikeActionModule,
    CommentsModule,
    CustomImageModule,
    ViewFullImageModule
  ],
  entryComponents : [DailyInspirationFilterComponent],

  providers: [DailyInspirationService]
})
export class DailyInspirationListingModule { }
