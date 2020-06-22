import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './component/user-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';

const routes: Routes = [
  {
    path: '',
    component: UserListingComponent
  }
]

@NgModule({
  declarations: [UserListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
  ]
})
export class UserListingModule { }
