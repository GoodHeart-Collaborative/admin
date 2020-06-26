import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBasicDetailComponent } from './user-basic-detail.component';



@NgModule({
  declarations: [UserBasicDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [UserBasicDetailComponent]
})
export class UserBasicDetailModule { }
