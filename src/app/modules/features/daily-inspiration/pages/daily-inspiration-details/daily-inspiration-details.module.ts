import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyInspirationDetailsComponent } from './view/daily-inspiration-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DailyInspirationDetailsComponent
  }
];

@NgModule({
  declarations: [DailyInspirationDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DailyInspirationDetailsModule { }
