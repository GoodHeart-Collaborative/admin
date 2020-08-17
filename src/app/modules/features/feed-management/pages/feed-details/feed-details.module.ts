import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedDetailsComponent } from './view/feed-details.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: FeedDetailsComponent
  }
];

@NgModule({
  declarations: [FeedDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedDetailsModule { }
