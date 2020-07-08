import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDailyInspiratinComponent } from './view/add-daily-inspiratin.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AddDailyInspiratinComponent
  }
];
@NgModule({
  declarations: [AddDailyInspiratinComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddDailyInspirationModule { }
