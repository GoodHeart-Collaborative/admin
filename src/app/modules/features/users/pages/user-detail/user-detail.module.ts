import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './view/user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UserBasicDetailModule } from './user-basic-detail/user-basic-detail.module';
import { UserEventsModule } from './user-events/user-events.module';
import { UserGratitudeJournalModule } from './user-gratitude-journal/user-gratitude-journal.module';
import { UserShoutoutsModule } from './user-shoutouts/user-shoutouts.module';
import { UserTopicsModule } from './user-topics/user-topics.module';
import { EventDetailModule } from './user-events/event-detail/event-detail.module';
import { UserTopicDetailModule } from './user-topics/user-topic-detail/user-topic-detail.module';


const routes: Routes = [
  {
    path: '', redirectTo: 'details', pathMatch: 'full'

  },
  { path: 'details', component: UserDetailComponent }
];
@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    UserBasicDetailModule,
    UserEventsModule,
    UserGratitudeJournalModule,
    UserShoutoutsModule,
    EventDetailModule,
    UserTopicsModule,
    UserTopicDetailModule,
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
