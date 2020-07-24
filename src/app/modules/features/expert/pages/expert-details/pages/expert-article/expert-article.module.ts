import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertArticleComponent } from './view/expert-article.component';



@NgModule({
  declarations: [ExpertArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [ExpertArticleComponent]

})
export class ExpertArticleModule { }
