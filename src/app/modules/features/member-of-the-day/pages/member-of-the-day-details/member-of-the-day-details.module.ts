import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberOfTheDayDetailsComponent } from './view/member-of-the-day-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MemberOfTheDayDetailsComponent
  }
];

@NgModule({
  declarations: [MemberOfTheDayDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MemberOfTheDayDetailsModule { }
