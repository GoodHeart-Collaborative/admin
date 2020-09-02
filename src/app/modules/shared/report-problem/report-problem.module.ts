import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportProblemComponent } from './view/report-problem.component';
import { MatMenuModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';



@NgModule({
  declarations: [ReportProblemComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    CustomImageModule,
    TimePipeModule
  ],
  entryComponents: [ReportProblemComponent]
})
export class ReportProblemModule { }
