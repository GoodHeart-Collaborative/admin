import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShoutoutsComponent } from './user-shoutouts.component';
import { UsersService } from '../../../service/users.service';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { UserShoutoutsDetailsComponent } from './details/view/user-shoutouts-details.component';
import { ListingFilterComponent } from './component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';


const routes: Routes = [
];

@NgModule({
  declarations: [UserShoutoutsComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  providers: [UsersService],
  exports : [UserShoutoutsComponent],
  entryComponents: [ListingFilterComponent]

})
export class UserShoutoutsModule { }
