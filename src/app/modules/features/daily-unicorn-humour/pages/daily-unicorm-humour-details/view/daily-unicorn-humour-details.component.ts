import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DAILY_UNICORN } from 'src/app/constant/routes';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ReportProblemComponent } from 'src/app/modules/shared/report-problem/view/report-problem.component';

@Component({
  selector: 'app-daily-unicorn-humour-details',
  templateUrl: './daily-unicorn-humour-details.component.html',
  styleUrls: ['./daily-unicorn-humour-details.component.scss']
})
export class DailyUnicornHumourDetailsComponent implements OnInit {
  dailyUnicornDetails: any;
  smilesDetails: any;

  constructor(
    private router: Router,
    private $matDailog: MatDialog,
    private $common: CommonService,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService) {
      this.smilesDetails = $router.snapshot.data.smileData.data;
      console.log(this.smilesDetails);
      $breadcrumb.replace(this.smilesDetails._id, this.smilesDetails.description);
  }

  ngOnInit() { }


  /**
   * ON LIKE Handler
   * @param id
   */
  likeHandler(id: string, likesCount: number) {
    if (!likesCount) {
      return;
    }

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
   this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: like
    }).afterClosed().subscribe();
  }

  // onReportProblem(id: string, count: number) {
  //   if (!count) {
  //     return;
  //   }
  //   this.$common.onReportProblemHandler(id).then(res => {
  //     if (res && res.data) {
  //       this.$matDailog.open(ReportProblemComponent, {
  //         width: '500px',
  //         data: res.data['data']
  //       }).afterClosed().subscribe();
  //     }
  //   });
  // }

}
