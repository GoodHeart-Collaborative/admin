import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { MatDialog } from '@angular/material';
import { ReportProblemComponent } from 'src/app/modules/shared/report-problem/view/report-problem.component';

@Component({
  selector: 'app-daily-advice-details',
  templateUrl: './daily-advice-details.component.html',
  styleUrls: ['./daily-advice-details.component.scss']
})
export class DailyAdviceDetailsComponent implements OnInit {

  adviceDetails: any;
  comments: any;
  like: any;
  public hideShowReplies: boolean = false;


  constructor(
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $common: CommonService,
    private $matDailog: MatDialog) {
    this.adviceDetails = $router.snapshot.data.dailyData.data;
    console.log(this.adviceDetails);
    
    $breadcrumb.replace(this.adviceDetails._id, this.adviceDetails.title);
  }

  ngOnInit() {
  }


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
