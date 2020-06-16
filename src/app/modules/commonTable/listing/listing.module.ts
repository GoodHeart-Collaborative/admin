import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForModule } from '../for';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { ListingComponent } from './listing.component';
// import { SearchFilterModule } from '../../layout/layout-shared/search-filter/search-filter.module';
import { FormsModule } from '@angular/forms';
import { SearchFilterModule } from '../search-filter/search-filter.module';
import { FilterModule } from './components/filter/filter.module';
// import { NoDataModule } from '../../no-data/no-data.module';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    // LayoutSharedModule,
    // NoDataModule,
    FormsModule,
    ForModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    SearchFilterModule,
    FilterModule
  ],
  exports: [ListingComponent, FilterModule, ForModule]
})
export class ListingModule {}
