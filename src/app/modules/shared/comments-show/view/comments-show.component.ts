import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommonService } from '../../services/common.service';

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
  constructor(private $common: CommonService) { }

  async ngOnChanges() {
    this.comments = await this.getCommentHandler(this.commentId);
    console.log(this.comments);
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
    console.log(commentId , 'shama');
    
    if (!this.comments[commenIndex].showReply) {
        this.comments[commenIndex].replies = await this.getCommentHandler(this.commentId, commentId);
    }
    this.comments[commenIndex]['showReply'] = !this.comments[commenIndex]['showReply']
    this.hideShowReplies = !this.hideShowReplies;
  }

}
