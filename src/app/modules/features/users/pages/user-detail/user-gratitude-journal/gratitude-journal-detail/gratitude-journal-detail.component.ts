import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { GlobalService } from 'src/app/services/global/global.service';


@Component({
  selector: 'app-gratitude-journal-detail',
  templateUrl: './gratitude-journal-detail.component.html',
  styleUrls: ['./gratitude-journal-detail.component.scss']
})
export class GratitudeJournalDetailComponent implements OnInit {

  public hideShowReplies = false;
  gratitudeDetails: any;
  comments: any;
  userID: any;
  constructor(
    private $matDailog: MatDialog,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $common: CommonService,
    $global: GlobalService
  ) {
    $router.queryParams.subscribe(({ userId }) => {
      console.log(userId);
      this.userID = $global.decodeData(userId);
      console.log($router.snapshot.params.id);
      $breadcrumb.replace($router.snapshot.params.id, $router.snapshot.params.id, `/admin/users/${this.userID}/details`)
    });
    this.gratitudeDetails = $router.snapshot.data.gratitudeData;
  }

  /**
   * ON LIKE Handler
   * @param id
   */
  likeHandler(id: string, likesCount: number) {
    if (!likesCount) {
      return;
    }
    const params = {
      pageNo: 1,
      limit: 100,
      postId: id
    };
    this.$common.onLikeHandler(params).then(res => {
      const like = res.data['list'];
      this.onlikeHandler(like);
    });
  }

  /**
   * user Like Handler
   * @param id
   */
  onlikeHandler(like: any) {
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: like
    }).afterClosed().subscribe();
  }


  async ngOnInit() {
    // this.comments = await this.getCommentHandler(this.gratitudeDetails._id);
    // console.log(this.comments);
    // this.comments = this.comments.map(comment => {
    //   comment['replies'] = [];
    //   comment['showReply'] = false;
    //   return comment;
    // });
  }

  // async toggleReplies(commentId: string, commenIndex: number) {
  //   if (!this.comments[commenIndex].showReply) {
  //       this.comments[commenIndex].replies = await this.getCommentHandler(this.gratitudeDetails._id, commentId);
  //   }
  //   this.comments[commenIndex]['showReply'] = !this.comments[commenIndex]['showReply']
  //   this.hideShowReplies = !this.hideShowReplies;
  // }

  /**
   * user Comment Handler
   */
  // async getCommentHandler(id, commentId?) {
  //   const params = {
  //     pageNo: 1,
  //     limit: 100,
  //     postId: id
  //   };
  //   if (commentId) {
  //     params['commentId'] = commentId;
  //   }
  //   return await this.$common.onCommentHandler(params).then(res => {
  //     return res.data['list'];
  //   });
  // }

}