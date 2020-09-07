import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { ReportProblemComponent } from 'src/app/modules/shared/report-problem/view/report-problem.component';

@Component({
  selector: 'app-daily-inspiration-details',
  templateUrl: './daily-inspiration-details.component.html',
  styleUrls: ['./daily-inspiration-details.component.scss']
})
export class DailyInspirationDetailsComponent implements OnInit {
  dailyInspirationDetails: any;
  likeCount;

  constructor(
               $router: ActivatedRoute,
               $breadcrumb: BreadcrumbService,
               private $matDailog: MatDialog,
               private $common: CommonService) {
      this.dailyInspirationDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.dailyInspirationDetails._id, this.dailyInspirationDetails.title);
    }

  ngOnInit() {
  }

  /**
   * ON LIKE Handler
   * @param id
   */
  likeHandler(id: string, likesCount: number) {
    this.$common.onLikeHandler(id).then(res => {
      const like = res.data['list'];
      this.onlikeHandler(like, likesCount);
    });
  }

/**
 * user Like Handler
 * @param id
 */
  onlikeHandler(like: any, likesCount: number) {
    if (!likesCount) {
      return;
    }
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: like
    }).afterClosed().subscribe();
  }

  onReportProblem(id: string, count: number) {
    // if (!count) {
    //   return;
    // }
    // this.$common.onReportProblemHandler(id , ).then(res => {
    //   if (res && res.data) {
    //     this.$matDailog.open(ReportProblemComponent, {
    //       width: '500px',
    //       data: res.data['data']
    //     }).afterClosed().subscribe();
    //   }
    // });
  }
}
