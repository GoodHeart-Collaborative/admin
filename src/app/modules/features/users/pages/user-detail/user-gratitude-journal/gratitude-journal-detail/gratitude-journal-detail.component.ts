import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gratitude-journal-detail',
  templateUrl: './gratitude-journal-detail.component.html',
  styleUrls: ['./gratitude-journal-detail.component.scss']
})
export class GratitudeJournalDetailComponent implements OnInit {

  constructor(private $activateRoute: ActivatedRoute) { 
    //  this.id = this.$activateRoute.snapshot.params
    // console.log(this.$activateRoute.snapshot.params);
    
  }

  ngOnInit() {
  }

}
