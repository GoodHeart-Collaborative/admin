import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyInspirationDetailsComponent } from './view/daily-inspiration-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';

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
    RouterModule.forChild(routes),
    CustomImageModule,
    LikeActionModule
  ]
})
export class DailyInspirationDetailsModule { }
