import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsAndAnalyticsComponent } from './view/reports-and-analytics.component';
import { Routes, RouterModule } from '@angular/router';
import { REPORTS_AND_ANALYTICS , REPORTS_AND_ANALYTICS_LIST} from 'src/app/constant/routes';
import { MatTabsModule } from '@angular/material';

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
    RouterModule.forChild(routes),
    MatTabsModule,
  ]
})
export class ReportsAndAnalyticsModule { }
