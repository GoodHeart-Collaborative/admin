import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../service/users.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';
import { USER } from 'src/app/constant/routes';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-user-basic-detail',
  templateUrl: './user-basic-detail.component.html',
  styleUrls: ['./user-basic-detail.component.scss']
})
export class UserBasicDetailComponent implements OnInit {
  @Input() data;
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
    this.$confirmBox.listAction('User', isDelete ? 'delete' : (this.data.status === 'blocked' ? 'active' : 'block'))
    .subscribe((confirm) => {
      if (confirm) {
        const params = {
          status: isDelete ? 'deleted' : (this.data.status === 'blocked' ? 'active' : 'blocked')
        };
        this.$userService.onVerifiedHnadler(this.data.id, params).then((res) => {
          this.$utility.success(res.message);
          if (isDelete) {
            this.$router.navigate([USER.fullUrl]);
          } else {

            this.data.status = this.data.status === 'blocked' ? 'active' : 'blocked';
          }
        });
      }
    });
  }

  onDeleteUSer() {
    this.onBlockUSer(true);
  }

  onverifyHandler(id, isAdminVerified) {
    this.$confirmBox.listAction('User', (isAdminVerified ? 'Refute'  : 'Verified')).subscribe((confirm) => {
      if (confirm) {
        let   params = {};
        if (!isAdminVerified) {
          params['isAdminVerified'] =  true;
        } else {
          params['isAdminVerified'] = true;
        }
        this.$userService.onVerifiedHnadler(id, params).then(res => {
          if (res) {
              // tslint:disable-next-line: no-unused-expression
              this.data.isAdminVerified =   this.data.isAdminVerified  ? false : true;
            }
        });
        }
    });
  }

  onRefuteHandler(id, isAdminRejected) {
    this.$confirmBox.listAction('User', (isAdminRejected ? 'Refute'  : 'Verified')).subscribe((confirm) => {
      if (confirm) {
        let   params = {};
        if (isAdminRejected) {
          params['isAdminRejected'] =  false;
        } else {
          params['isAdminRejected'] = true;
        }
        this.$userService.onVerifiedHnadler(id, params).then(res => {
          if (res) {
              this.data.isAdminRejected = this.data.isAdminRejected  ? false : true;
            }
        });
        }
    });
  }
  onImageClick(image) {
    this.matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: image
    }).afterClosed().subscribe();
  }
}
