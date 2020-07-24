import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-expert-details',
  templateUrl: './expert-details.component.html',
  styleUrls: ['./expert-details.component.scss']
})
export class ExpertDetailsComponent implements OnInit {
  expertDetails: any;
  details: any;

  constructor(
    private $router: Router,
    activateRoute: ActivatedRoute,
    $breadcrumb: BreadcrumbService,
    global: GlobalService
  ) {
    activateRoute.queryParams.subscribe(({ application }) => {
      if (!application) {
        return;
      }
      if (application) {
        this.details = global.decodeData(application);
        console.log( this.details);
        $breadcrumb.replace(this.details._id, this.details.contentDisplayName);
      }
    });
  }

  ngOnInit() {
  }

  onAddContent() {
    this.$router.navigate([`admin/expert/${'ddfdfsdfsddcscsc'}`, 'add']);
  }

}
