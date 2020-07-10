import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberOfTheDayListingComponent } from './view/member-of-the-day-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { AddMemberOfTheDayModule } from '../add-member-of-the-day/add-member-of-the-day.module';
import { AddMemberOfTheDayComponent } from '../add-member-of-the-day/view/add-member-of-the-day.component';

const routes: Routes = [
  {
    path: '',
    component: MemberOfTheDayListingComponent
  }
];

@NgModule({
  declarations: [MemberOfTheDayListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AddMemberOfTheDayModule
  ],
})
export class MemberOfTheDayListingModule { }
