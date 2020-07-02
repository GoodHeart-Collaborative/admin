import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-gratitude-journal',
  templateUrl: './user-gratitude-journal.component.html',
  styleUrls: ['./user-gratitude-journal.component.scss']
})
export class UserGratitudeJournalComponent implements OnInit {
isProcessing:Boolean= false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isProcessing = true;
  }
}
