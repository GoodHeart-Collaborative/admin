import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventsComponent } from './user-events.component';



@NgModule({
  declarations: [UserEventsComponent],
  imports: [
    CommonModule
  ],
  exports: [UserEventsComponent]
})
export class UserEventsModule { }
