import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsAndAnalyticsComponent } from './view/reports-and-analytics.component';
import { Routes, RouterModule } from '@angular/router';
import { REPORTS_AND_ANALYTICS , REPORTS_AND_ANALYTICS_LIST} from 'src/app/constant/routes';

const routes: Routes = [
  {
    path: '',
    component: ReportsAndAnalyticsComponent,
    }
];

@NgModule({
  declarations: [ReportsAndAnalyticsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportsAndAnalyticsModule { }
