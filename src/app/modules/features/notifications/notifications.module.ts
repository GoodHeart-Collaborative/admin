import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationComponent } from './view/notification.component';
import { NotificationsService, NotificationsServiceResolve } from './service/notifications.service';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ],
  providers: [NotificationsService , NotificationsServiceResolve]
})
export class NotificationsModule { }
