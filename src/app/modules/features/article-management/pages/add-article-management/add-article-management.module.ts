import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleManagementComponent } from './view/add-article-management.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AddArticleManagementComponent
  }
];

@NgModule({
  declarations: [AddArticleManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddArticleManagementModule { }
