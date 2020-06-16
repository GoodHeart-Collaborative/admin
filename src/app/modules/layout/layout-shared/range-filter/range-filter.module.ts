import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeFilterComponent } from './component/range-filter/range-filter.component';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RangeFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports:[RangeFilterComponent]
})
export class RangeFilterModule { }
