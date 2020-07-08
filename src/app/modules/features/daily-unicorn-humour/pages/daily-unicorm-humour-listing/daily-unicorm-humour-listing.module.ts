import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyUnicornHumourListingComponent } from './view/daily-unicorn-humour-listing.component';
import { Routes,  RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DailyUnicornHumourListingComponent
  }
];

@NgModule({
  declarations: [DailyUnicornHumourListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DailyUnicormHumourListingModule { }
