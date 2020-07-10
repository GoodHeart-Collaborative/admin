import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyUnicornHumourDetailsComponent } from './view/daily-unicorn-humour-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule, MatIconModule } from '@angular/material';

// const routes: Routes = [
//   {
//     path: '',
//     component: DailyUnicornHumourDetailsComponent
//   }
// ];

@NgModule({
  declarations: [DailyUnicornHumourDetailsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
    // RouterModule.forChild(routes)
  ],
  entryComponents: [DailyUnicornHumourDetailsComponent],
  exports: [DailyUnicornHumourDetailsComponent]
})
export class DailyUnicormHumourDetailsModule { }
