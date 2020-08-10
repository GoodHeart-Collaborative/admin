import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DashboardService } from './service/dashboard.service';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { MatProgressSpinnerModule } from '@angular/material';
import { ViewFullImageModule } from '../../shared/view-full-image/view-full-image.module';
import { LineChartComponent } from './pages/line-chart/line-chart.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [DashboardComponent, LineChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    CustomDatePipeModule,
    CustomImageModule,
    ChartModule,
    MatProgressSpinnerModule,
    CustomImageModule,
    ViewFullImageModule
  ],
  exports: [DashboardComponent],
  providers: [
    MatDatepickerModule,
    DashboardService
  ],

})
export class DashboardModule { }
