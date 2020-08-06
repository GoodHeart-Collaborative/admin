import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsShowComponent } from './view/comments-show.component';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';
import { LikeActionModule } from '../like-action/like-action.module';



@NgModule({
  declarations: [CommentsShowComponent],
  imports: [
    CommonModule,
    CustomImageModule,
    TimePipeModule,
    LikeActionModule
  ],
  exports: [CommentsShowComponent]
})
export class CommentsShowModule { }
