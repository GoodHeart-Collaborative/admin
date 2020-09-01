import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsAndAnalyticsComponent } from './view/reports-and-analytics.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { ReportsAndAnalyticsService } from './service/reports-and-analytics.service';
import { ReportListingModule } from './pages/report-listing/report-listing.module';

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
    MatIconModule,
    ReportListingModule
  ],
  providers: [ReportsAndAnalyticsService]
})
export class ReportsAndAnalyticsModule { }
