import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShoutoutsDetailsComponent } from './view/user-shoutouts-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';

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
    ViewFullImageModule,
    MatIconModule
  ]
})
export class UserShoutoutsDetailsModule { }
