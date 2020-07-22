import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './view/comments/comments.component';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [CommentsComponent],
  entryComponents: [CommentsComponent]
})
export class CommentsModule { }
