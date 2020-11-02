import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CommonService } from '../../../services/common.service';
import { Router } from '@angular/router';
import { USER } from 'src/app/constant/routes';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public hideShowReplies = false;
  comments: any = [];
  pageIndex = 0;
  commentsData: any;
  constructor(
    private $dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private $common: CommonService,
    private $router: Router
  ) {
  }

  async ngOnInit() {
    if (this.data) {
      this.commentsData = await this.getCommentHandler(this.data);
      console.log(this.commentsData);
      this.addComments(this.commentsData.data);
    }
  }

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
    if (id) {
      const params = {
        pageNo: this.pageIndex + 1 ,
        limit: 10,
        postId: id
      };
      if (commentId) {
        params['commentId'] = commentId;
      }
      return await this.$common.onCommentHandler(params).then(res => {
        return res.data;
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
      console.log(this.comments[commenIndex].replies.data);
    }
    this.comments[commenIndex]['showReply'] = !this.comments[commenIndex]['showReply'];
    this.hideShowReplies = !this.hideShowReplies;
  }

  async onLoadMore() {
    if (this.pageIndex + 1 < this.commentsData.totalPage) {
      this.pageIndex++;
      const loadData: any = await this.getCommentHandler(this.data);
      this.addComments(loadData.data);
    }
  }


  seeProfile(id) {
    this.$router.navigate([`${USER.fullUrl}`, id, 'details']);
    this.$dialogRef.close();
  }
}
