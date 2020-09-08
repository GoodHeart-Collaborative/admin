import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalenderComponent } from './view/calender.component';
import { CalenderService } from './service/calender.service';
import { TableModule } from '../../commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';


@NgModule({
  declarations: [CalenderComponent , ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    TableModule,
    CustomDatePipeModule,
    CustomImageModule
  ],
  providers: [CalenderService]
})
export class CalendarModule { }
