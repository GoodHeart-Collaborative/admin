import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './view/user-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { SearchFilterModule } from 'src/app/modules/commonTable/search-filter/search-filter.module';
import { UsersListingFilterComponent } from './components/users-listing-filter.component';
import { MatIconModule, MatMenuModule, MatDialogModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { ConfirmBoxService, ConfirmBoxModule } from 'src/app/modules/shared/confirm-box';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ReportProblemModule } from 'src/app/modules/shared/report-problem/report-problem.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UserListingComponent
  }
];


@NgModule({
  declarations: [UserListingComponent, UsersListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    MatDialogModule,
    DateFilterModule,
    CustomDatePipeModule,
    MatIconModule,
    ConfirmBoxModule,
    ViewFullImageModule,
    CustomImageModule,
    MatButtonModule,
    ReportProblemModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [ConfirmBoxService],
  entryComponents: [UsersListingFilterComponent]
})
export class UserListingModule { }
