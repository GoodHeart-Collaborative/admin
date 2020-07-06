import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../../../shared/services/data-transfer.service';
import { MatDialog } from '@angular/material';
import { ChangePasswordComponent } from '../../change-password/component/change-password.component';
import { Router } from '@angular/router';
import { EDIT_PROFILE } from 'src/app/constant/routes';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  profileDetail;
  constructor(
    private $dataService: DataTransferService,
    private matDailog: MatDialog,
    private $router: Router
  ) { }

  ngOnInit() {
    this.getDetail();
  }

  /**
   * Getting Admin Profile Detail
   */
  getDetail() {
   this.$dataService.getProfileDetail()
      .subscribe(
        (response: any) => {
          this.profileDetail = response.data;
        }, err => { }
      );
    }


  openChangePasswordTab() {
     this.matDailog.open(ChangePasswordComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }

  onEditProfile() {
      this.$router.navigate([EDIT_PROFILE.fullUrl]);
  }
}
