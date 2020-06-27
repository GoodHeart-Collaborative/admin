import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { TableModule } from '../../commonTable/table';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFilterModule } from '../../layout/layout-shared/date-filter/date-filter.module';
import { RouterModule } from '@angular/router';
import { DropdownFilterModule } from '../../layout/layout-shared/dropdown-filter/dropdown-filter.module';
import { UsersComponent } from './view/users.component';
import { MinMaxFilterModule } from '../../layout/layout-shared/min-max-filter/min-max-filter.module';
import { UsersServiceResolve } from './service/users.service';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    ReactiveFormsModule,
    DateFilterModule,
    MinMaxFilterModule,
    RouterModule,
    DropdownFilterModule,
  ],
  providers: [UsersServiceResolve]
})
export class UsersModule { }
