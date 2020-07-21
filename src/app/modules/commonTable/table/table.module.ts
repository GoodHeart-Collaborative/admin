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
  MatButtonModule,
  MatButtonToggleModule,
} from '@angular/material';
import { TableComponent } from './view/table.component';
import { ForModule } from '../for';
import { FilterComponent } from './components/filter/filter.component';
import { SearchFilterModule } from '../search-filter/search-filter.module';

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
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    ForModule,
    MatMenuModule,
    MatIconModule,
    SearchFilterModule,
    MatButtonModule,
    MatButtonToggleModule,
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
