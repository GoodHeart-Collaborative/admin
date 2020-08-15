import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumDetailsComponent } from './view/forum-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CommentsShowModule } from 'src/app/modules/shared/comments-show/comments-show.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';

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
    RouterModule.forChild(routes),
    CommentsShowModule,
    CustomImageModule
  ]
})
export class ForumDetailsModule { }
