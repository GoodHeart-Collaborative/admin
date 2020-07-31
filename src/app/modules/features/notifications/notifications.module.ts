import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationComponent } from './view/notification.component';
import { NotificationsService } from './service/notifications.service';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ],
  providers: [NotificationsService]
})
export class NotificationsModule { }
