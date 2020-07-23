import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpertComponent } from './view/add-expert.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddExpertComponent
  }
];

@NgModule({
  declarations: [AddExpertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddExpertModule { }
