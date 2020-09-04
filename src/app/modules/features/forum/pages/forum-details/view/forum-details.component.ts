import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { ReportProblemComponent } from 'src/app/modules/shared/report-problem/view/report-problem.component';
import { REPORT_TYPE } from 'src/app/constant/drawer';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.scss']
})
export class ForumDetailsComponent implements OnInit {
  forumsData: any;

  constructor(
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $common: CommonService,
    private $matDailog: MatDialog
  ) {
    this.forumsData = $router.snapshot.data.forumData.data;
    // $breadcrumb.replace(this.forumsData._id,
    //   this.forumsData.userData ? this.forumsData.userData.firstName  : this.forumsData.adminData.name);
  }

  ngOnInit() { }

  /**
   * ON LIKE Handler
   *
   */
  likeHandler(id: string, likesCount: number) {
    if (!likesCount) {
      return;
    }
    this.$common.onLikeHandler(id).then(res => {
      const like = res.data['list'];
      this.onlikeHandler(like);
    });
  }

  /**
   * user Like Handler
   *
   */
  onlikeHandler(like: any) {
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: like
    }).afterClosed().subscribe();
  }

  onReportProblem(id: string, count: number, type = REPORT_TYPE.FORUM) {
    if (!count) {
      return;
    }
    this.$common.onReportProblemHandler(id,type ).then(res => {
      if (res && res.data) {
        this.$matDailog.open(ReportProblemComponent, {
          width: '500px',
          data: res.data['data']
        }).afterClosed().subscribe();
      }
    });
  }
}
