import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { EventService } from '../../../service/event.service';
import { MatDialog } from '@angular/material';
import { IntrestedListComponent } from 'src/app/modules/shared/intrested-list/view/intrested-list.component';
import { GoingListComponent } from 'src/app/modules/shared/going-list/view/going-list.component';
import { EVENT_INTEREST } from 'src/app/constant/drawer';
import { COPIED } from 'src/app/constant/messages';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
export type ActionType = 'blocked' | 'active';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  eventDetails: any;
  today = new Date().getTime();
  constructor(
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $event: EventService,
    private $matDailog: MatDialog
  ) {
    this.eventDetails = $router.snapshot.data.eventDetails.data;
    $breadcrumb.replace(this.eventDetails._id, this.eventDetails.title);
  }

  ngOnInit() {
  }

  onActionHandler(id: string, action: ActionType , endDate) {
    if (this.today > endDate ) {
      return;
    }
    this.$confirmBox.listAction('event', action == 'active' ? 'active' : 'block')
      .subscribe((confirm) => {
        if (confirm) {
          this.$event.updateStatus(id, action).then((res) => {
            this.$utility.success(res.message);
            this.eventDetails.status = (action == 'active' ? 'active' : 'blocked');
          });
        }
      });
  }

  onGoingCount(count: number) {
    if (!count) {
      return;
    }
    const eventData = {
      pageIndex: 0,
      pageSize: 20,
      eventId: this.eventDetails._id,
      type: EVENT_INTEREST.GOING
    };
    this.$event.onGoingAndInterestHnadler(eventData).then(res => {
      if (res) {
        this.$matDailog.open(GoingListComponent, {
          width: '500px',
          data: res.data['list']
        }).afterClosed().subscribe();
      }
    });

  }

  onInterestCount(count: number) {
    if (!count) {
      return;
    }
    const eventData = {
      pageIndex: 0,
      pageSize: 20,
      eventId: this.eventDetails._id,
      type: EVENT_INTEREST.INTEREST
    };
    this.$event.onGoingAndInterestHnadler(eventData).then(res => {
      if (res) {
        this.$matDailog.open(IntrestedListComponent, {
          width: '500px',
          data: res.data['list']
        }).afterClosed().subscribe();
      }
    });
  }

  onCopyHandler(el: HTMLDivElement) {
    this.$utility.show('This is deeplink URL, used in mobile platform to view respective shared event details.');
  }

  onMobileCopyHandler(element: HTMLDivElement) {
    window.getSelection().selectAllChildren(element);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    this.$utility.success(COPIED);
  }

  onViewPic(image: string, type = 1) {
    if (!image) {
      return;
    }
    this.$matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: { image, type }
    }).afterClosed().subscribe();
  }

  openEventUrl(url: string) {
    if (url.includes('https://') || url.includes('http://')) {
      window.open(url, '_blank');
     } else {
      window.open(`http://` + url, '_blank');
    }
  }
}
