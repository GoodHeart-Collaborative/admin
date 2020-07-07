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
import { UserBasicDetailComponent } from './user-basic-detail/user-basic-detail.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'details', pathMatch: 'full'

  },
  { path: 'details', component: UserDetailComponent }
];
@NgModule({
  declarations: [UserDetailComponent],
  imports: [
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
