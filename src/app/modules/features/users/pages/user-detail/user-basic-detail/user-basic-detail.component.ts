import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../service/users.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';
import { USER } from 'src/app/constant/routes';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { MatDialog } from '@angular/material';
import { SliderComponent } from 'src/app/modules/shared/slider/view/slider.component';

@Component({
  selector: 'app-user-basic-detail',
  templateUrl: './user-basic-detail.component.html',
  styleUrls: ['./user-basic-detail.component.scss']
})
export class UserBasicDetailComponent implements OnInit {
  @Input() userDetails;
  selectedIndex  = 0;
  constructor(
    private $userService: UsersService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $router: Router,
    private matDailog: MatDialog
    ) { }

  ngOnInit() {
  }

  onBlockUSer(isDelete = false) {
    this.$confirmBox.listAction('user', isDelete ? 'delete' : (this.userDetails.status === 'blocked' ? 'active' : 'block'))
    .subscribe((confirm) => {
      if (confirm) {
        const params = {
          status: isDelete ? 'deleted' : (this.userDetails.status === 'blocked' ? 'active' : 'blocked')
        };
        this.$userService.onVerifiedHnadler(this.userDetails.id, params).then((res) => {
          this.$utility.success(res.message);
          if (isDelete) {
            this.$router.navigate([USER.fullUrl]);
          } else {

            this.userDetails.status = this.userDetails.status === 'blocked' ? 'active' : 'blocked';
          }
        });
      }
    });
  }

  onDeleteUSer() {
    this.onBlockUSer(true);
  }

  onverifyHandler(id, status) {
    this.$confirmBox.listAction('user', `${status  == 'verified'  ? 'verify' : 'reject'}`).subscribe((confirm) => {
      if (confirm) {
        const params = {
          adminStatus: status
        };
        this.$userService.onVerifiedHnadler(id, params).then(res => {
          if (res) {
              this.userDetails.adminStatus =   status  ;
            }
        });
        }
    });
  }


  onImageClick(image) {
    if (!image) {
      return;
    }
    this.matDailog.open(SliderComponent, {
      panelClass: 'slider-modal',
      data: image
    }).afterClosed().subscribe();
  }

}
