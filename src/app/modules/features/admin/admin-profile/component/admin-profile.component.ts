import { Component, OnInit, Inject } from '@angular/core';
import { DataTransferService } from '../../../../shared/services/data-transfer.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChangePasswordComponent } from '../../change-password/component/change-password.component';
import { Router } from '@angular/router';
import { EDIT_PROFILE } from 'src/app/constant/routes';
import { EditProfileComponent } from '../../edit-profile/component/edit-profile.component';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';

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
    private $router: Router,
    private $dialogRef: MatDialogRef<AdminProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = {},
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
          console.log(this.profileDetail);
          
        }, err => { }
      );
    }


  openChangePasswordTab() {
     this.matDailog.open(ChangePasswordComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }

  openEditProfileTab() {
    this.matDailog.open(EditProfileComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }

  onImageClick(image) {
    this.matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: image
    }).afterClosed().subscribe();
  }

}
