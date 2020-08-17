import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddFeedComponent } from '../view/add-feed.component';

const routes: Routes = [
  {
    path: '',
    component: AddFeedComponent
  }
];


@NgModule({
  declarations: [AddFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddFeedModule { }
