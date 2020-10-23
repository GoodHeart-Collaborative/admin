import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { GoingListComponent } from 'src/app/modules/shared/going-list/view/going-list.component';
import { IntrestedListComponent } from 'src/app/modules/shared/intrested-list/view/intrested-list.component';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { UserEventService } from 'src/app/modules/features/users/pages/user-detail/user-events/service/user-event.service';
import { MatDialog } from '@angular/material';
import { EVENT_INTEREST } from 'src/app/constant/drawer';
import { GlobalService } from 'src/app/services/global/global.service';
export type ActionType = 'blocked' | 'active';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  eventDetails: any;
  userID: any;

  constructor(
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $event: UserEventService,
    private $matDailog: MatDialog,
    $global: GlobalService
  ) {
    $router.queryParams.subscribe(({ userId }) => {
      this.eventDetails = $router.snapshot.data.eventData.data;
      this.userID = $global.decodeData(userId);
      $breadcrumb.replace($router.snapshot.params.id, this.eventDetails.title, `/admin/users/${this.userID}/details`);
      $breadcrumb.replace( this.eventDetails.title, this.eventDetails.title, `/admin/users/${this.userID}/details`);
    });
  }

  ngOnInit() { }

  onActionHandler(id: string, action: ActionType) {
    this.$confirmBox.listAction('event', action == 'active' ? 'active' : 'block')
      .subscribe((confirm) => {
        if (confirm) {
          this.$event.updateEventStatus(id, action).then((res) => {
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
      eventId: this.eventDetails.id,
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
      eventId: this.eventDetails.id,
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

  openEventUrl(url: string) {
    if (url.includes('https://') || url.includes('http://')) {
      window.open(url, '_blank');
     } else {
      window.open(`http://` + url, '_blank');
       }
  }
}
