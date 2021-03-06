import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { sentTo } from 'src/app/constant/drawer';
import { NotificationsService } from '../../../service/notifications.service';
import { NOTIFICATIONS } from 'src/app/constant/routes';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { FormControl } from '@angular/forms';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit {
  notificationData: any;
  sentTo = sentTo;
  platform: FormControl = new FormControl();
  constructor(
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $service: NotificationsService,
    private $utility: UtilityService,
    private $route: Router,
    private $confirmBox: ConfirmBoxService,
    private matDailog: MatDialog
  ) {
    this.notificationData = $router.snapshot.data.notificationData.data;
    $breadcrumb.replace(this.notificationData._id, this.notificationData.title);
  }

  ngOnInit() {
  }

  onSubmit() {
    const { image, message, platform, title } = this.notificationData;
    this.$service.add({ image, message, platform, title }).then(
      data => {
        this.$utility.success(data.message);
        this.$route.navigate([NOTIFICATIONS.fullUrl]);
      },
      err => {
      });
  }

  onActionHandler() {
    this.$confirmBox.listAction('notification', 'delete')
      .subscribe((confirm) => {
        if (confirm) {
          this.$service.updateStatus(this.notificationData._id).then((res) => {
            this.$utility.success(res.message);
            this.$route.navigate([NOTIFICATIONS.fullUrl]);

          });
        }
      });
  }

  openProfilePic(image: string , type = 1) {
    if (!image) {
      return;
    }
    this.matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: { image, type }
    }).afterClosed().subscribe();
  }
}
