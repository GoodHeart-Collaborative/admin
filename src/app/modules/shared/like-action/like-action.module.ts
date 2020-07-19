import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeActionComponent } from './view/like-action.component';
import { MatDialogModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import {CustomDatePipeModule} from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { ViewFullImageModule } from '../view-full-image/view-full-image.module';


@NgModule({
  declarations: [LikeActionComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CustomImageModule,
    CustomDatePipeModule,
    ViewFullImageModule
  ],
  exports: [LikeActionComponent],
  entryComponents: [LikeActionComponent]
})
export class LikeActionModule { }
