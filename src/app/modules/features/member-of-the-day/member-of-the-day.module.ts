import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberOfTheDayRoutingModule } from './member-of-the-day-routing.module';
import { MemberOfTheDayComponent } from './view/member-of-the-day.component';
import { MemberOfTheDayServiceResolve } from './service/member-of-the-day.service';


@NgModule({
  declarations: [MemberOfTheDayComponent],
  imports: [
    CommonModule,
    MemberOfTheDayRoutingModule
  ],
  providers: [MemberOfTheDayServiceResolve]
})
export class MemberOfTheDayModule { }
