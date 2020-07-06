import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTopicsComponent } from './user-topics.component';
import { UserTopicDetailModule } from './user-topic-detail/user-topic-detail.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
];

@NgModule({
  declarations: [UserTopicsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserTopicDetailModule
  ],
  exports : [UserTopicsComponent]
})
export class UserTopicsModule { }
