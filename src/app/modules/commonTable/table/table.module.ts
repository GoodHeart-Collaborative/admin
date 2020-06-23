import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSortModule,
  MatMenuModule,
  MatIconModule,
} from '@angular/material';
import { TableComponent } from './view/table.component';
import { ForModule } from '../for';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    TableComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    // LayoutSharedModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    ForModule,
    MatMenuModule,
    MatIconModule,
    
  ],
  exports: [
    TableComponent,
    FilterComponent,
    ForModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  entryComponents: [
    FilterComponent
  ]
})
export class TableModule { }
