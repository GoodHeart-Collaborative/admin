import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFaqsComponent } from './view/add-faqs.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [AddFaqsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  entryComponents: [AddFaqsComponent]
})
export class AddFaqsModule { }
