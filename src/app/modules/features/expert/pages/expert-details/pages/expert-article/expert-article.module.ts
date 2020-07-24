import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertArticleComponent } from './view/expert-article.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';



@NgModule({
  declarations: [ExpertArticleComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule,
  ],
  exports: [ExpertArticleComponent]

})
export class ExpertArticleModule { }
