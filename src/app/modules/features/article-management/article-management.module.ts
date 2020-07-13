import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleManagementRoutingModule } from './article-management-routing.module';
import { ArticleManagementComponent } from './article-management.component';
import { ArticleManagementService } from './service/article-management.service';


@NgModule({
  declarations: [ArticleManagementComponent],
  imports: [
    CommonModule,
    ArticleManagementRoutingModule
  ],
  providers: [ArticleManagementService]
})
export class ArticleManagementModule { }
