import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpertContentComponent } from './view/add-expert-content.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddExpertContentComponent
  }
];

@NgModule({
  declarations: [AddExpertContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddExpertContentModule { }
