import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './view/comments/comments.component';
import { MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';



@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    CustomImageModule,
    TimePipeModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [CommentsComponent],
  entryComponents: [CommentsComponent]
})
export class CommentsModule { }
