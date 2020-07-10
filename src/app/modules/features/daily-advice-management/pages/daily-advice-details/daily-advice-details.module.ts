import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyAdviceDetailsComponent } from './view/daily-advice-details.component';
import { Routes, RouterModule } from '@angular/router';
import { DailyAdviceManagementServiceResolve } from '../../service/daily-advice-management.service';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';


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
    RouterModule.forChild(routes),
    CustomImageModule
  ],
})
export class DailyAdviceDetailsModule { }
