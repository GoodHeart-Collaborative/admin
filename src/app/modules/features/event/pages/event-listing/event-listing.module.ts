import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListingComponent } from './view/event-listing.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: EventListingComponent
  }
]

@NgModule({
  declarations: [EventListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EventListingModule { }
