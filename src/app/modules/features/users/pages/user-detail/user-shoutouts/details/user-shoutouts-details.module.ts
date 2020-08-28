import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShoutoutsDetailsComponent } from './view/user-shoutouts-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: UserShoutoutsDetailsComponent
  }
];

@NgModule({
  declarations: [UserShoutoutsDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
  ]
})
export class UserShoutoutsDetailsModule { }
