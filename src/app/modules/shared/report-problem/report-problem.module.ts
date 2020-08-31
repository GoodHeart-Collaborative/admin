import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportProblemComponent } from './view/report-problem.component';



@NgModule({
  declarations: [ReportProblemComponent],
  imports: [
    CommonModule
  ],
  exports: [ReportProblemComponent]
})
export class ReportProblemModule { }
