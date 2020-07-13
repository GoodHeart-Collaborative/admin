import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../service/users.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';
import { USER } from 'src/app/constant/routes';

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
    private $router: Router) { }

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
    this.$confirmBox.listAction('User', (isAdminVerified  ? 'Verified' : 'Premium')).subscribe((confirm) => {
      if (confirm) {
        const params = {
          isAdminVerified: isAdminVerified,
        };
        this.$userService.onVerifiedHnadler(id, params).then(res => {
          if (res) {
              // tslint:disable-next-line: no-unused-expression
              this.data.isAdminVerified =   this.data.isAdminVerified  ? 'Verified' : 'Premium';
            }
        });

      }
    });
  }
}
