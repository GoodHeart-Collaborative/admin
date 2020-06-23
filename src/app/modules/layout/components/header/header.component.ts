import { Component, OnInit, Renderer2 } from '@angular/core';
import { POPUP_MESSAGES } from '../../../../constant/messages';
import { UtilityService } from '../../../shared/services/utility.service';
import { HttpService } from '../../../shared/services/http.service';
import { Router } from '@angular/router';
import { DataTransferService } from '../../../shared/services/data-transfer.service';
import { LOGOUT } from 'src/app/constant/urls';
import { LOGIN } from '../../../../constant/routes';
import { IPopupData } from '../../../../models/common-models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profileSubscriber;
  profileDetail;
  flag = 1;

  constructor(
    private _utilityService: UtilityService,
    private renderer: Renderer2,
    private _http: HttpService,
    private _router: Router,
    private _dataService: DataTransferService
  ) {
    this.getProfileDetail();
  }

  sidebarCollaped() {
    if (this.flag === 1) {
      this.renderer.addClass(document.body, "collapsed");
      this.flag++;
    } else {
      this.renderer.removeClass(document.body, "collapsed");
      this.flag--;
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
  }
  logout() {
    let data: IPopupData = {
      title: POPUP_MESSAGES.logout,
      message: POPUP_MESSAGES.logoutConfirmation,
      confirmButtonText: POPUP_MESSAGES.logout
    }
    this._utilityService.openDialog(data).subscribe(success => {
      if (success) {
        this._http.patch(LOGOUT, {}).subscribe(
          response => {
            this._utilityService.clearStorage();
            this._router.navigate([LOGIN.fullUrl]);
          }, err => { }
        )
      }

    });

  }
  ngOnDestroy() {
    if (this.profileSubscriber) {
      this.profileSubscriber.unsubscribe();
    }
  }
}
