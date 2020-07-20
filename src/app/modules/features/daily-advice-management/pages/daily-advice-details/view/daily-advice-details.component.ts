import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { DailyAdviceManagementService } from '../../../service/daily-advice-management.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { MatDialog } from '@angular/material';

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
    $breadcrumb.replace(this.adviceDetails.id, this.adviceDetails.title);
    // this.likeHandler();

  }

  ngOnInit() {
    this.getLikeCommentHandler();
  }



  /**
   * user Comment Handler
   */
  getLikeCommentHandler() {
    const params = {
      pageNo: 1,
      limit: 100,
      postId: '5f0ff1e7fd8bfe1c64e69f4e'
    };
    this.$common.onCommentHandler(params).then(res => {
      this.comments = res.data['list'];
      console.log(this.comments);
     });
  }
/**
 * user Like Handler
 * @param id
 */
  onlikeHandler(id) {
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: id
    }).afterClosed().subscribe();
  }

  toggleReplies(){
    this.hideShowReplies = !this.hideShowReplies;
  }

}
