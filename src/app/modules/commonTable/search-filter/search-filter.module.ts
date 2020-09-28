import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterComponent } from './search-filter.component';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { WhiteSpaceModule } from '../../shared/white-space/white-space.module';
import { DigitOnlyModule } from 'src/app/directives/digit-only/digit-only.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    WhiteSpaceModule,
    DigitOnlyModule
  ],
  declarations: [
    SearchFilterComponent,
  ],
  exports: [
    SearchFilterComponent,
  ]

})
export class SearchFilterModule { }
