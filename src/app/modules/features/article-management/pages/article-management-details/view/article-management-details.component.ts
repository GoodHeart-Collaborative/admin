import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ViewFullImageComponent } from 'src/app/modules/shared/view-full-image/view/view-full-image.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-article-management-details',
  templateUrl: './article-management-details.component.html',
  styleUrls: ['./article-management-details.component.scss']
})
export class ArticleManagementDetailsComponent implements OnInit {

  articleDetails: any;
  constructor(
               $router: ActivatedRoute,
               $breadcrumb: BreadcrumbService,
               private matDailog: MatDialog) {
      this.articleDetails = $router.snapshot.data.dailyData.data;
      $breadcrumb.replace(this.articleDetails.id, this.articleDetails.title);
    }

  ngOnInit() {}

  onImageClick(image) {
    if (!image) {
      return;
    }
    this.matDailog.open(ViewFullImageComponent, {
      panelClass: 'view-full-image-modal',
      data: image
    }).afterClosed().subscribe();
  }

}
