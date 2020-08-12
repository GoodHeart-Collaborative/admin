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
  comments: any;
  @Input() commentId;
  public hideShowReplies: boolean = false;
  constructor(
    private $common: CommonService,
    private $matDailog: MatDialog) { }

  async ngOnChanges() {
    console.log(this.commentId, 'jjhjhjkh');
    
    this.comments = await this.getCommentHandler(this.commentId);
    console.log(this.comments, 'hjkhjkh');
    this.comments = this.comments.map(comment => {
      comment['replies'] = [];
      comment['showReply'] = false;
      return comment;
    });
  }

  ngOnInit() {}


  /**
   * user Comment Handler
   */
  async getCommentHandler(id, commentId?) {
    console.log(id, commentId);
    
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
