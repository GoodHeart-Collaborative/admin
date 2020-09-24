import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFaqsComponent } from './view/add-faqs.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';



@NgModule({
  declarations: [AddFaqsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule,
    WhiteSpaceModule
  ],
  entryComponents: [AddFaqsComponent]
})
export class AddFaqsModule { }
