import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumListingComponent } from './view/forum-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';

const routes: Routes = [
  {
    path: '',
    component: ForumListingComponent
  }
];

@NgModule({
  declarations: [ForumListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
  ],
})
export class ForumListingModule { }
