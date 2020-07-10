import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyUnicornHumourDetailsComponent } from './view/daily-unicorn-humour-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';

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
    MatIconModule,
    CustomImageModule
    // RouterModule.forChild(routes)
  ],
  entryComponents: [DailyUnicornHumourDetailsComponent],
  exports: [DailyUnicornHumourDetailsComponent]
})
export class DailyUnicormHumourDetailsModule { }
