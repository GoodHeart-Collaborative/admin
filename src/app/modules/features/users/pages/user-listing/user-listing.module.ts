import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './view/user-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { SearchFilterModule } from 'src/app/modules/commonTable/search-filter/search-filter.module';
import { UsersListingFilterComponent } from './components/users-listing-filter.component';
import { MatIconModule, MatMenuModule, MatDialogModule } from '@angular/material';

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
   MatDialogModule
  ],
  entryComponents:[UsersListingFilterComponent]
})
export class UserListingModule { }
