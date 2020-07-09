import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDailyUnicormHumourComponent } from './view/add-daily-unicorm-humour.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';


const routes: Routes = [
  {
    path: '',
    component: AddDailyUnicormHumourComponent
  }
];


@NgModule({
  declarations: [AddDailyUnicormHumourComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomImageModule
  ]
})
export class AddDailyUnicormHumourModule { }
