import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertDetailsComponent } from './view/expert-details.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ExpertDetailsComponent
  }
];
@NgModule({
  declarations: [ExpertDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExpertDetailsModule { }
