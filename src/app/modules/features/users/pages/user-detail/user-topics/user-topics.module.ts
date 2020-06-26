import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTopicsComponent } from './user-topics.component';



@NgModule({
  declarations: [UserTopicsComponent],
  imports: [
    CommonModule
  ],
  exports : [UserTopicsComponent]
})
export class UserTopicsModule { }
