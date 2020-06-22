import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './user-listing.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserListingService } from './service/user-listing.service';
import { ListingModule } from 'src/app/modules/commonTable/listing';
import { TableModule } from 'src/app/modules/commonTable/table';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListFilterComponent } from './components/user-list-filter/user-list-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { MinMaxFilterModule } from 'src/app/modules/layout/layout-shared/min-max-filter/min-max-filter.module';
import { DropdownFilterModule } from 'src/app/modules/layout/layout-shared/dropdown-filter/dropdown-filter.module';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { RouterModule } from '@angular/router';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';

const MATERIAL = [MatTooltipModule, MatIconModule, MatButtonModule];
const PIPES = [CustomDatePipeModule, AbsoluteRoutingModule];
@NgModule({
  imports: [
    CommonModule,
    ListingModule,
    TableModule,
    ...MATERIAL,
    ReactiveFormsModule,
    DateFilterModule,
    MinMaxFilterModule,
    RouterModule,
    DropdownFilterModule,
    ...PIPES,
  ],
  declarations: [UserListingComponent, UserListFilterComponent],
  exports: [UserListingComponent],
  providers: [UserListingService],
  entryComponents: [UserListFilterComponent],
})
export class UserListingModule {}
