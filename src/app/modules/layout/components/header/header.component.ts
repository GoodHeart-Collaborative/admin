import { Component, OnInit, Renderer2 } from '@angular/core';
import { POPUP_MESSAGES } from '../../../../constant/messages';
import { UtilityService } from '../../../shared/services/utility.service';
import { HttpService } from '../../../shared/services/http.service';
import { Router } from '@angular/router';
import { DataTransferService } from '../../../shared/services/data-transfer.service';
import { CHANGE_PASSWORD } from 'src/app/constant/routes';
import { LOGIN } from '../../../../constant/routes';
import { IPopupData } from '../../../../models/common-models';
import { MatDialog } from '@angular/material';
import { ChangePasswordComponent } from 'src/app/modules/features/admin/change-password/component/change-password.component';
import {ADMIN_PROFILE} from 'src/app/constant/routes'
import { AdminProfileComponent } from 'src/app/modules/features/admin/admin-profile/component/admin-profile.component';
import { EditProfileComponent } from 'src/app/modules/features/admin/edit-profile/component/edit-profile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profileSubscriber;
  profileDetail;
  flag = true;
  changePassword = ['/', ...CHANGE_PASSWORD.fullUrl.split('/')];

  constructor(
    private _utilityService: UtilityService,
    private renderer: Renderer2,
    private _http: HttpService,
    private $router: Router,
    private _dataService: DataTransferService,
    private matDailog: MatDialog
  ) {
    this.getProfileDetail();
  }

  sidebarCollaped() {
    if (this.flag === true) {
      this.renderer.addClass(document.body, "collapsed");
      this.flag = !this.flag;
    } else {
      this.renderer.removeClass(document.body, "collapsed");
      this.flag = !this.flag;
    }
  }

  getProfileDetail() {
    this._dataService.getProfileDetail().subscribe(
      (response: any) => {
        this.profileDetail = response.data;
        this._dataService.profileDetail.next(this.profileDetail);
      }, err => {

      });
  }

  ngOnInit() {
    this.profileSubscriber = this._dataService.profileDetail.subscribe(
      data => {
        if (data)
        this.profileDetail = data;
      }
    );
    if (window.innerWidth < 993) {
      this.renderer.addClass(document.body, "collapsed");
      this.flag = !this.flag;
    }
  }
  logout() {
    let data: IPopupData = {
      title: POPUP_MESSAGES.logout,
      message: POPUP_MESSAGES.logoutConfirmation,
      confirmButtonText: POPUP_MESSAGES.logout
    }
    this._utilityService.openDialog(data).subscribe(success => {
      if (!success) {
        return;
        //   this._http.patch(LOGOUT, {}).subscribe(
        //     response => {
        //       this._utilityService.clearStorage();
        //       this.$router.navigate([LOGIN.fullUrl]);
        //     }, err => { }
        //   )
      }
      this._utilityService.clearStorage();
      this.$router.navigate([LOGIN.fullUrl]);

    });

  }

  openCahngePasswordTab() {
    const dialogRef = this.matDailog.open(ChangePasswordComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }
  openAdminProfileTab() {
    const dialogRef = this.matDailog.open(AdminProfileComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }


  onProfile(){
    this.$router.navigate([ADMIN_PROFILE.fullUrl]);
  }
  ngOnDestroy() {
    if (this.profileSubscriber) {
      this.profileSubscriber.unsubscribe();
    }
  }
}
