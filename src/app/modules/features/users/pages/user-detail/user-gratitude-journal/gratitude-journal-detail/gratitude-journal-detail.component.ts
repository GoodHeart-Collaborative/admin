import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';


@Component({
  selector: 'app-gratitude-journal-detail',
  templateUrl: './gratitude-journal-detail.component.html',
  styleUrls: ['./gratitude-journal-detail.component.scss']
})
export class GratitudeJournalDetailComponent implements OnInit {

  constructor(
    private matDailog: MatDialog
  ) { }

  onlikeHandler() {
    const dialogRef = this.matDailog.open(LikeActionComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }
  ngOnInit() {
  }

}
