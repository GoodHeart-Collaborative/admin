import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncouragingMessageComponent } from './view/encouraging-message.component';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';



@NgModule({
  declarations: [EncouragingMessageComponent],
  imports: [
    CommonModule,
    TableModule,
    CustomDatePipeModule
  ],
  exports: [EncouragingMessageComponent]
})
export class EncouragingMessageModule { }
