import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleManagementDetailsComponent } from './view/article-management-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';

const routes: Routes = [
  {
    path: '',
    component: ArticleManagementDetailsComponent
  }
];

@NgModule({
  declarations: [ArticleManagementDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomImageModule,
    ViewFullImageModule
  ]
})
export class ArticleManagementDetailsModule { }
