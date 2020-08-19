import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncouragingMessageComponent } from './view/encouraging-message.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatOptionModule, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [EncouragingMessageComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule,
    DateFilterModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [EncouragingMessageComponent],
})
export class EncouragingMessageModule { }
