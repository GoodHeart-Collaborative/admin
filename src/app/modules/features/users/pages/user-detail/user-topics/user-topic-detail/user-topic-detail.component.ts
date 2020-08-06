import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-topic-detail',
  templateUrl: './user-topic-detail.component.html',
  styleUrls: ['./user-topic-detail.component.scss']
})
export class UserTopicDetailComponent implements OnInit {

  public hideShowReplies = false;
  constructor() { }

  ngOnInit() { }

  onlikeHandler() {
    
  }
  toggleReplies() {
    this.hideShowReplies = !this.hideShowReplies;
  }
}
