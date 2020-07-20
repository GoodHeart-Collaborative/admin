import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LikeActionComponent } from 'src/app/modules/shared/like-action/view/like-action.component';


@Component({
  selector: 'app-gratitude-journal-detail',
  templateUrl: './gratitude-journal-detail.component.html',
  styleUrls: ['./gratitude-journal-detail.component.scss']
})
export class GratitudeJournalDetailComponent implements OnInit {

  public hideShowReplies: boolean = false;
  
  constructor(
    private matDailog: MatDialog
    ) { }
    
  onlikeHandler() {
    this.matDailog.open(LikeActionComponent, {
      width: '500px',
    }).afterClosed().subscribe();
  }
  ngOnInit() {
  }

  toggleReplies(){
    console.log(this.hideShowReplies);
    this.hideShowReplies = !this.hideShowReplies;
    console.log(this.hideShowReplies);
  }

}
