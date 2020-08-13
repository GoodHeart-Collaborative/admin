import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumDetailsComponent } from './view/forum-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ForumDetailsComponent
  }
];

@NgModule({
  declarations: [ForumDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForumDetailsModule { }
