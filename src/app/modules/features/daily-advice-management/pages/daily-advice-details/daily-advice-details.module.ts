import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyAdviceDetailsComponent } from './view/daily-advice-details.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DailyAdviceDetailsComponent
  }
];
@NgModule({
  declarations: [DailyAdviceDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DailyAdviceDetailsModule { }
