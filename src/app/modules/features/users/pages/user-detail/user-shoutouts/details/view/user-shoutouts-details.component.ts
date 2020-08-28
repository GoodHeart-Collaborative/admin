import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { GlobalService } from 'src/app/services/global/global.service';

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
    $global: GlobalService
  ) {
    this.shoutoutsData = $router.snapshot.data.shoutoutsData;
    $router.queryParams.subscribe(({ userId }) => {
      this.userID = $global.decodeData(userId);
      console.log(this.userID);
      $breadcrumb.replace($router.snapshot.params.id, $router.snapshot.params.id, `/admin/users/${this.userID}/details`);
    });
  }

  ngOnInit() {
  }

}
