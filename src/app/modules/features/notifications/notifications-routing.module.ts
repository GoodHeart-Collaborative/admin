import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './view/notification.component';
import { NOTIFICATIONS_LIST, ADD_NOTIFICATIONS } from 'src/app/constant/routes';


const routes: Routes = [
  {
    path: '',
    component: NotificationComponent,
    children: [
      {
        path: '',
        redirectTo: NOTIFICATIONS_LIST.path,
        pathMatch: 'full',
      },
      {
        path: NOTIFICATIONS_LIST.path,
        loadChildren: () => import('./pages/notification-listing/notification-listing.module')
          .then((m) => m.NotificationListingModule
          ),
      },
      {
        path: ADD_NOTIFICATIONS.path,
        loadChildren: () => import('./pages/add-notification/add-notification.module')
          .then((m) => m.AddNotificationModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
