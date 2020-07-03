import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeActionComponent } from './view/like-action.component';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [LikeActionComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [LikeActionComponent],
  entryComponents: [LikeActionComponent]
})
export class LikeActionModule { }
