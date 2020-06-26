import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShoutoutsComponent } from './user-shoutouts.component';



@NgModule({
  declarations: [UserShoutoutsComponent],
  imports: [
    CommonModule
  ],
  exports : [UserShoutoutsComponent]
})
export class UserShoutoutsModule { }
