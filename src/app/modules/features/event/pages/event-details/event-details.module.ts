import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailsComponent } from './view/event-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { IntrestedListModule } from 'src/app/modules/shared/intrested-list/intrested-list.module';
import { GoingListModule } from 'src/app/modules/shared/going-list/going-list.module';
import { MatDialogModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: EventDetailsComponent
  }
];

@NgModule({
  declarations: [EventDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomImageModule,
    IntrestedListModule,
    GoingListModule,
    MatDialogModule
  ]
})
export class EventDetailsModule { }
