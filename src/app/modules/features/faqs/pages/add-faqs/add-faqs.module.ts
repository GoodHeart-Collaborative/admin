import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFaqsComponent } from './view/add-faqs.component';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [AddFaqsComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [AddFaqsComponent]
})
export class AddFaqsModule { }
