import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';

@Component({
  selector: 'app-user-shoutouts-details',
  templateUrl: './user-shoutouts-details.component.html',
  styleUrls: ['./user-shoutouts-details.component.scss']
})
export class UserShoutoutsDetailsComponent implements OnInit {
  userID: any;
  shoutoutsData: any;

  constructor(
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    $global: GlobalService,
    private $matDailog: MatDialog
  ) {
    if ($router.snapshot.data && $router.snapshot.data.shoutoutsData) {
      this.shoutoutsData = $router.snapshot.data.shoutoutsData;
    }
    $router.queryParams.subscribe(({ userId }) => {
      if (!userId) {
        return;
      }
      this.userID = $global.decodeData(userId);
      console.log(this.userID);
      $breadcrumb.replace($router.snapshot.params.id, this.shoutoutsData.title, `/admin/users/${this.userID}/details`);
      $breadcrumb.replace(this.shoutoutsData.title, this.shoutoutsData.title, `/admin/users/${this.userID}/details`);
    });
  }

  ngOnInit() { }

  openGif(image: string ) {
    this.$matDailog.open(ViewFullImageComponent, {
      width: '500px',
      data: {image , type: 0}
    }).afterClosed().subscribe();
  }

}
