import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DAILY_UNICORN } from 'src/app/constant/routes';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';

@Component({
  selector: 'app-daily-unicorn-humour-details',
  templateUrl: './daily-unicorn-humour-details.component.html',
  styleUrls: ['./daily-unicorn-humour-details.component.scss']
})
export class DailyUnicornHumourDetailsComponent implements OnInit {
  dailyUnicornDetails: any;

  constructor(
    private $router: Router,
    private $dialogRef: MatDialogRef<DailyUnicornHumourDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private $matDailog: MatDialog,
    private $common: CommonService) {
    console.log(data);
  }

  ngOnInit() { }
  /**
   * User Edit Handler
   */
  onEditDetails() {
    this.$router.navigate([`${DAILY_UNICORN.fullUrl}`, 'edit', this.data._id]);
    this.$dialogRef.close();
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
      this.onlikeHandler(like, likesCount);
    });
  }

/**
 * user Like Handler
 * @param id
 */
  onlikeHandler(like: any, likesCount: number) {
 
    this.$matDailog.open(LikeActionComponent, {
      width: '500px',
      data: like
    }).afterClosed().subscribe();
  }

}
