import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';

@Component({
  selector: 'app-daily-inspiration-details',
  templateUrl: './daily-inspiration-details.component.html',
  styleUrls: ['./daily-inspiration-details.component.scss']
})
export class DailyInspirationDetailsComponent implements OnInit {
  dailyInspirationDetails: any;

  constructor(
               $router: ActivatedRoute,
               $breadcrumb: BreadcrumbService,
               private $matDailog: MatDialog) {
      this.dailyInspirationDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.dailyInspirationDetails.id, this.dailyInspirationDetails.title);
    }

  ngOnInit() {
  }

  onlikeHandler(id: string, likesCount: number) {
    if (!likesCount) {
      return;
    }
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: id
    }).afterClosed().subscribe();
  }
}
