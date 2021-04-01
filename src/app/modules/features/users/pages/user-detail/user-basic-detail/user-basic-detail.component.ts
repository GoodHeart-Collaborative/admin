import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../service/users.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';
import { USER } from 'src/app/constant/routes';
import { MatDialog } from '@angular/material';
import { SliderComponent } from 'src/app/modules/shared/slider/view/slider.component';
import { INDUSTRY, REPORT_TYPE , PROFESSION_TYPE} from 'src/app/constant/drawer';
import { USER_SUBSCRIPTION_PLAN } from 'src/app/constant/constants';
import { ReportProblemComponent } from 'src/app/modules/shared/report-problem/view/report-problem.component';
import { CommonService } from 'src/app/modules/shared/services/common.service';

@Component({
  selector: 'app-user-basic-detail',
  templateUrl: './user-basic-detail.component.html',
  styleUrls: ['./user-basic-detail.component.scss']
})
export class UserBasicDetailComponent implements OnInit {
  @Input() userDetails;
  selectedIndex = 0;
  industry = INDUSTRY;
  profession = PROFESSION_TYPE;
  subscriptionPlan = USER_SUBSCRIPTION_PLAN;
  constructor(
    private $userService: UsersService,
    private $confirmBox: ConfirmBoxService,
    private $utility: UtilityService,
    private $router: Router,
    private matDailog: MatDialog,
    private $common: CommonService
  ) { }

  ngOnInit() {
  }

  /***
   * Block , Active User
   */
  onBlockUSer(isDelete = false) {
    this.$confirmBox.listAction('user', isDelete ? 'delete' : (this.userDetails.status === 'blocked' ? 'active' : 'block'))
      .subscribe((confirm) => {
        if (confirm) {
          const params = {
            status: isDelete ? 'deleted' : (this.userDetails.status === 'blocked' ? 'active' : 'blocked')
          };
          this.$userService.onVerifiedHnadler(this.userDetails._id, params).then((res) => {
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


  onverifyHandler(id, status) {
    this.$confirmBox.listAction('user', `${status == 'verified' ? 'verify' : 'reject'}`).subscribe((confirm) => {
      if (confirm) {
        const params = {
          adminStatus: status
        };
        this.$userService.onVerifiedHnadler(id, params).then(res => {
          if (res) {
            this.$utility.success(res.message);
            this.userDetails.adminStatus = status;
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


  onReportProblem(id: string, count: number, type = REPORT_TYPE.USER) {
    if (!count) {
      return;
    }
    this.$common.onReportProblemHandler(id, type).then(res => {
      if (res && res.data) {
        this.matDailog.open(ReportProblemComponent, {
          width: '500px',
          data: res.data['data']
        }).afterClosed().subscribe();
      }
    });
  }
}
