import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ViewFullImageComponent } from '../../view-full-image/view/view-full-image.component';
import { CommonService } from '../../services/common.service';
import { UtilityService } from '../../services/utility.service';
import { Router } from '@angular/router';
import { USER } from 'src/app/constant/routes';
import { ConfirmBoxService } from '../../confirm-box';
export type ActionType = 'blocked' | 'active';

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
    private $common: CommonService,
    private $utility: UtilityService,
    private $router: Router,
    private $confirmBox: ConfirmBoxService,
  ) {
    // this.likeHandler();
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
  // likeHandler() {
  //   const params = {
  //     pageNo: 1,
  //     limit: 100,
  //     postId: this.data
  //   };
  //   this.$common.onLikeHandler(params).then(res => {
  //     this.like = res.data['list'];
  //   });
  // }

  /**
   * Block and Unblock User
   */

  onActionHandler(id: string, status: ActionType) {
    this.$confirmBox.listAction('user', status == 'active' ? 'block' : 'active').subscribe((confirm) => {
      if (confirm) {
        const params = {
          status: status == 'active' ? 'blocked' : 'active'
        };
        this.$common.updateStatus(id, params).then(res => {
          this.$utility.success(res.message);
          this.$dialogRef.close();
        });
      }
    });

  }

  onSeeProfile(id: string) {
    this.$router.navigate([`${USER.fullUrl}`, id, 'details']);
    this.$dialogRef.close();
  }

}
