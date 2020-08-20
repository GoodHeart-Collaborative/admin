import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-expert-post-details',
  templateUrl: './expert-post-details.component.html',
  styleUrls: ['./expert-post-details.component.scss']
})
export class ExpertPostDetailsComponent implements OnInit {
  post: any;

  constructor(
    $activatedRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    private $matDailog: MatDialog,
    private $common: CommonService
  ) {
    this.post = $activatedRoute.parent.snapshot.data.expertData.data[0];
    $breadcrumb.replace(this.post._id, this.post.topic);
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

}
