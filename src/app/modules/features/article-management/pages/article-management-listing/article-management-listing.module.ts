import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleManagementListingComponent } from './view/article-management-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';


const routes: Routes = [
  {
    path: '',
    component: ArticleManagementListingComponent
  }
];

@NgModule({
  declarations: [ArticleManagementListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule
  ]
})
export class ArticleManagementListingModule { }
