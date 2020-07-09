import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdviceComponent } from './view/add-advice.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddAdviceComponent
  }
];

@NgModule({
  declarations: [AddAdviceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddDailyAdviceModule { }
