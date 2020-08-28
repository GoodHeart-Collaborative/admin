import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './view/users.component';
import { USER_LIST, USER_DETAIL ,GRATITUDE_DETAIL , EVENT_DETAIL, TOPIC_DETAIL, SHOUTOUTS_DETAIL} from '../../../constant/routes';
import { UsersServiceResolve } from './service/users.service';
import { UserGratitudeJournalServiceResolve } from './pages/user-detail/user-gratitude-journal/service/user-gratitude-journal.service';
import { UserEventServiceResolve } from './pages/user-detail/user-events/service/user-event.service';
import { UserShoutoutsServiceResolve } from './pages/user-detail/user-shoutouts/service/user-shoutouts.service';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: USER_LIST.path,
        pathMatch: 'full',
      },
      {
        path: USER_LIST.path,
        loadChildren: () => import('./pages/user-listing/user-listing.module').then( (m) => m.UserListingModule),
      },
      {
        path: `${USER_DETAIL.path}`,
        resolve: {
          UserDetails : UsersServiceResolve
        },
        loadChildren: () => import('./pages/user-detail/user-detail.module').then( (m) => m.UserDetailModule),
      },
      {
        path: `${GRATITUDE_DETAIL.path}`,
        resolve: {
          gratitudeData : UserGratitudeJournalServiceResolve
        },
        loadChildren: () => import('./pages/user-detail/user-gratitude-journal/gratitude-journal-detail/gratitude-journal-detail.module')
        .then( (m) => m.GratitudeJournalDetailModule),
      },
      {
        path: `${EVENT_DETAIL.path}`,
        resolve: {
          eventData : UserEventServiceResolve
        },
        loadChildren: () => import('./pages/user-detail/user-events/event-detail/event-detail.module').then( (m) => m.EventDetailModule),
      },
      {
        path: `${TOPIC_DETAIL.path}`,
       loadChildren: () => import('./pages/user-detail/user-topics/user-topic-detail/user-topic-detail.module').
       then( (m) => m.UserTopicDetailModule),
      },
      {
        path: `${SHOUTOUTS_DETAIL.path}`,
        resolve: {
          shoutoutsData : UserShoutoutsServiceResolve
        },
       loadChildren: () => import('./pages/user-detail/user-shoutouts/details/user-shoutouts-details.module').
       then( (m) => m.UserShoutoutsDetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
