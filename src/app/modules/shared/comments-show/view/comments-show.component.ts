import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { LikeActionComponent } from '../../like-action/view/like-action.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-comments-show',
  templateUrl: './comments-show.component.html',
  styleUrls: ['./comments-show.component.scss']
})
export class CommentsShowComponent implements OnInit, OnChanges {
  details: any;
  comments: any = [];
  pageIndex = 0;
  pageSize = 5;
  @Input() commentId;
  public hideShowReplies: boolean = false;
  commentsData: any;

  constructor(
    private $common: CommonService,
    private $matDailog: MatDialog) { }

  async ngOnChanges() {
    this.commentsData = await this.getCommentHandler(this.commentId);
    this.addComments(this.commentsData.list);
  }

  ngOnInit() { }


  addComments(data: any[]) {
    const mappedArray = data.map(comment => {
      comment['replies'] = [];
      comment['showReply'] = false;
      return comment;
    });
    this.comments = [...this.comments, ...mappedArray];
  }
  /**
   * user Comment Handler
   */
  async getCommentHandler(id, commentId?) {
    const params = {
      pageNo: `${this.pageIndex + 1}`,
      limit: `${this.pageSize}`,
      postId: id
    };
    if (commentId) {
      params['commentId'] = commentId;
    }
    return await this.$common.onCommentHandler(params).then(res => {
      return res.data;
    });
  }

  /**
   * Show nested comment
   * @param id
   */
  async toggleReplies(commentId: string, commenIndex: number) {
    if (!this.comments[commenIndex].showReply) {
      this.comments[commenIndex].replies = await this.getCommentHandler(this.commentId, commentId);
    }
    this.comments[commenIndex]['showReply'] = !this.comments[commenIndex]['showReply']
    this.hideShowReplies = !this.hideShowReplies;
  }

  /**
   * ON LIKE Handler
   * @param id
   */
  likeHandler(id: string, likesCount: number, postId) {
    if (!likesCount) {
      return;
    }
    this.$common.onLikeHandler(id, postId).then(res => {
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

  async onLoadMore() {
    if (this.pageIndex + 1 < this.commentsData.total_page) {
      this.pageIndex++;
      const loadData: any = await this.getCommentHandler(this.commentId);
      console.log(loadData);
      
      this.addComments(loadData.list);
    }
  }
}
