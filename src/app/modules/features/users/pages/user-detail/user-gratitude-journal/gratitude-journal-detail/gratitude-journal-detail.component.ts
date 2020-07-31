import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';


@Component({
  selector: 'app-gratitude-journal-detail',
  templateUrl: './gratitude-journal-detail.component.html',
  styleUrls: ['./gratitude-journal-detail.component.scss']
})
export class GratitudeJournalDetailComponent implements OnInit {

  public hideShowReplies: boolean = false;
  gratitudeDetails: any;
  comments: any;
  constructor(
    private $matDailog: MatDialog,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $common: CommonService
  ) {
    this.gratitudeDetails = $router.snapshot.data.gratitudeData;
    console.log(  this.gratitudeDetails, 'sssssssssss');
    // $breadcrumb.replace(this.dailyInspirationDetails.id, this.dailyInspirationDetails.
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


  async ngOnInit() {
    this.comments = await this.getCommentHandler(this.gratitudeDetails._id);
    console.log(this.comments);
    this.comments = this.comments.map(comment => {
      comment['replies'] = [];
      comment['showReply'] = false;
      return comment;
    });
  }

  async toggleReplies(commentId: string, commenIndex: number) {
    if (!this.comments[commenIndex].showReply) {
        this.comments[commenIndex].replies = await this.getCommentHandler(this.gratitudeDetails._id, commentId);
    }
    this.comments[commenIndex]['showReply'] = !this.comments[commenIndex]['showReply']
    this.hideShowReplies = !this.hideShowReplies;
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
  }

}
