import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
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
  }

  async ngOnInit() {
    this.comments = await this.getCommentHandler(this.adviceDetails.id);
    console.log(this.comments);
    this.comments = this.comments.map(comment => {
      comment['replies'] = [];
      comment['showReply'] = false;
      return comment;
    })

  }



  /**
   * user Comment Handler
   */
  async getCommentHandler(id, commentId?) {
    const params = {
      pageNo: 1,
      limit: 100,
      postId: id
    };
    if (commentId) {
      params['commentId'] = commentId;
    }
    return await this.$common.onCommentHandler(params).then(res => {
      return res.data['list'];
    });
    return new Promise((resolve, reject) => {

    })
    this.$common.onCommentHandler(params).then(res => {
      this.comments = res.data['list'];
    });
  }

  /**
   * user Like Handler
   * @param id
   */
  onlikeHandler(id: string, likesCount: number) {
    if (!likesCount) {
      return;
    }
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: id
    }).afterClosed().subscribe();
  }

  /**
   * Show nested comment
   * @param id
   */
  async toggleReplies(commentId: string, commenIndex: number) {
    if (!this.comments[commenIndex].showReply) {

      this.comments[commenIndex].replies = await this.getCommentHandler(this.adviceDetails.id, commentId)
    }
    this.comments[commenIndex]['showReply'] = !this.comments[commenIndex]['showReply']
    this.hideShowReplies = !this.hideShowReplies;

  }

}
