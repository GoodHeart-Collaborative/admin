import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinMaxFilterComponent } from './component/min-max-filter.component';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DigitOnlyModule } from 'src/app/directives/digit-only/digit-only.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';

const MATERIAL = [MatInputModule, MatFormFieldModule];

@NgModule({
  declarations: [MinMaxFilterComponent],
  imports: [
    CommonModule,
    ...MATERIAL,
    ReactiveFormsModule,
    FormsModule,
    DigitOnlyModule,
    ValidationErrorPipeModule,
  ],
  exports: [MinMaxFilterComponent],
})
export class MinMaxFilterModule {}
