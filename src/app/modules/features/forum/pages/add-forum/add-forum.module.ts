import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddForumComponent } from './view/add-forum.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddForumComponent
  }
];

@NgModule({
  declarations: [AddForumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddForumModule { }
