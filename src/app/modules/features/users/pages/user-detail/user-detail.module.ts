import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UserBasicDetailModule } from './user-basic-detail/user-basic-detail.module';
import { UserEventsModule } from './user-events/user-events.module';
import { UserGratitudeJournalModule } from './user-gratitude-journal/user-gratitude-journal.module';
import { UserShoutoutsModule } from './user-shoutouts/user-shoutouts.module';
import { UserTopicsModule } from './user-topics/user-topics.module';


const routes: Routes = [
  {
    path: '',
    component: UserDetailComponent
  }
];
@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    UserBasicDetailModule,
    UserEventsModule,
    UserGratitudeJournalModule,
    UserShoutoutsModule,
    UserTopicsModule,
    MatTabsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ]
})
export class UserDetailModule { }
