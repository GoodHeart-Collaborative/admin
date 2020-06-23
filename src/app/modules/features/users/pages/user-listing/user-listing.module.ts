import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './view/user-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { SearchFilterModule } from 'src/app/modules/commonTable/search-filter/search-filter.module';
import { UsersListingFilterComponent } from './components/users-listing-filter.component';
import { MatIconModule, MatMenuModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: UserListingComponent
  }
]


@NgModule({
  declarations: [UserListingComponent, UsersListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
   
  ],
  entryComponents:[UsersListingFilterComponent]
})
export class UserListingModule { }
