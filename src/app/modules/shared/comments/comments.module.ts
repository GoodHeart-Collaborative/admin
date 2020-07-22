import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './view/comments/comments.component';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';



@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    CustomImageModule,
    TimePipeModule
  ],
  exports: [CommentsComponent],
  entryComponents: [CommentsComponent]
})
export class CommentsModule { }
