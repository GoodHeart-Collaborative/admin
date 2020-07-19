import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ViewFullImageComponent } from '../../view-full-image/view/view-full-image.component';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-like-action',
  templateUrl: './like-action.component.html',
  styleUrls: ['./like-action.component.scss']
})
export class LikeActionComponent implements OnInit {
  like: any;

  constructor(
    private $dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDailog: MatDialog,
    private $common: CommonService
    ) {
      this.likeHandler();
     }

  ngOnInit() {
  }

  onViewPic(pic) {
    this.matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: pic
    }).afterClosed().subscribe();
  }

/**
 * ON LIKE Handler
 * @param id
 */
  likeHandler() {
    const params = {
      pageNo: 1,
      limit: 100,
      postId: this.data
    };
    this.$common.onLikeHandler(params).then(res => {
      this.like = res.data['list'];
      console.log(this.like);
      
     });
  }
}
