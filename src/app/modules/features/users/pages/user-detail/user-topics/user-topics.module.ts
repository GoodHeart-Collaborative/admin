import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTopicsComponent } from './user-topics.component';
import { UserTopicDetailModule } from './user-topic-detail/user-topic-detail.module';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { UsersService } from '../../../service/users.service';

const routes: Routes = [
];

@NgModule({
  declarations: [UserTopicsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule
  ],
  providers: [UsersService],
  exports : [UserTopicsComponent]
})
export class UserTopicsModule { }
