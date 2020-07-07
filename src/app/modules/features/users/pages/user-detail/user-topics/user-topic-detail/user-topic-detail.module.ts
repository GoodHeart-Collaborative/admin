import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTopicDetailComponent } from './user-topic-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserTopicDetailComponent
  }
];

@NgModule({
  declarations: [UserTopicDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [UserTopicDetailComponent]

})
export class UserTopicDetailModule { }
