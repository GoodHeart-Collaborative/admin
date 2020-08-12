import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public hideShowReplies: boolean = false;
  comments: any;
  constructor(
    private $dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private $common: CommonService,

  ) {
    console.log(data);
  }

  async ngOnInit() {
    if (this.data) {

      this.comments = await this.getCommentHandler(this.data);
      console.log(this.comments);
      this.comments = this.comments.map(comment => {
        comment['replies'] = [];
        comment['showReply'] = false;
        return comment;
      });
    }
  }

  /**
   * user Comment Handler
   */
  async getCommentHandler(id, commentId?) {
    console.log(id);
    if (id) {
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

  /**
   * Show nested comment
   * @param id
   */
  async toggleReplies(commentId: string, commenIndex: number) {
    if (!this.comments[commenIndex].showReply) {
      this.comments[commenIndex].replies = await this.getCommentHandler(this.data, commentId);
    }
    this.comments[commenIndex]['showReply'] = !this.comments[commenIndex]['showReply']
    this.hideShowReplies = !this.hideShowReplies;
  }


}
