import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyUnicornHumourDetailsComponent } from './view/daily-unicorn-humour-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DailyUnicornHumourDetailsComponent
  }
];

@NgModule({
  declarations: [DailyUnicornHumourDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DailyUnicormHumourDetailsModule { }
