import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [FilterComponent],
  imports: [CommonModule, MatIconModule],
  exports: [FilterComponent]
})
export class FilterModule {}
