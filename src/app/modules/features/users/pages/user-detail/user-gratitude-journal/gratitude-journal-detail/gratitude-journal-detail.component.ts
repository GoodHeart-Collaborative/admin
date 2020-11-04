import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { CommentsComponent } from 'src/app/modules/shared/comments/view/comments/comments.component';


@Component({
  selector: 'app-gratitude-journal-detail',
  templateUrl: './gratitude-journal-detail.component.html',
  styleUrls: ['./gratitude-journal-detail.component.scss']
})
export class GratitudeJournalDetailComponent implements OnInit {

  public hideShowReplies = false;
  gratitudeDetails: any;
  comments: any;
  GRATITUDE_IMAGE : '/assets/images/gratitute placeholder_pink@3x.png';
  userID: any;
  constructor(
    private $matDailog: MatDialog,
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $common: CommonService,
    $global: GlobalService
  ) {
    $router.queryParams.subscribe(({ userId }) => {
      this.gratitudeDetails = $router.snapshot.data.gratitudeData;
      this.userID = $global.decodeData(userId);
      $breadcrumb.replace($router.snapshot.params.id, this.gratitudeDetails.description, `/admin/users/${this.userID}/details`);
      $breadcrumb.replace(this.gratitudeDetails.description, this.gratitudeDetails.description, `/admin/users/${this.userID}/details`);
    });
  }

  ngOnInit(){}
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

  onCommentsHandler(id: string, commentCount: number) {
    if (!commentCount) {
      return;
    }
    this.$matDailog.open(CommentsComponent, {
      width: '500px',
      data: id
    }).afterClosed().subscribe();
  }
  

}