import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleManagementRoutingModule } from './article-management-routing.module';
import { ArticleManagementComponent } from './article-management.component';
import { ArticleManagementService, ArticleManagementServiceResolve } from './service/article-management.service';


@NgModule({
  declarations: [ArticleManagementComponent],
  imports: [
    CommonModule,
    ArticleManagementRoutingModule
  ],
  providers: [ArticleManagementService, ArticleManagementServiceResolve]
})
export class ArticleManagementModule { }
