import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatCheckboxModule,
  MatSortModule
} from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table.component';
import { ForModule } from '../for';
// import { StatusModule } from 'src/app/pipes/statusPipe/status.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatCheckboxModule,
    ForModule,
    MatSortModule
    // StatusModule
  ],
  exports: [TableComponent]
})
export class TableModule {}
