import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportProblemComponent } from './view/report-problem.component';
import { MatMenuModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [ReportProblemComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [ReportProblemComponent]
})
export class ReportProblemModule { }
