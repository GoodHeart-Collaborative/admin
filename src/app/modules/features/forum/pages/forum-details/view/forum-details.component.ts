import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ConfirmBoxService } from 'src/app/modules/shared/confirm-box';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { EventService } from 'src/app/modules/features/event/service/event.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.scss']
})
export class ForumDetailsComponent implements OnInit {
  forumsData: any;

  constructor(
    $router: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
  ) {
    this.forumsData = $router.snapshot.data.forumData.data;
    $breadcrumb.replace(this.forumsData._id, this.forumsData.topic);
  }

  ngOnInit() {
  }

}
