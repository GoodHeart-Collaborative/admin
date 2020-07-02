import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-gratitude-journal',
  templateUrl: './user-gratitude-journal.component.html',
  styleUrls: ['./user-gratitude-journal.component.scss']
})
export class UserGratitudeJournalComponent implements OnInit {
isProcessing = false;
@Input() data;
  constructor(private $router: Router
              ) {
            //  this.id = this.$activeRoute.snapshot.params.id   
              }

  ngOnInit() {
  }

  onClick() {
    this.$router.navigate([`admin/users/${this.data._id}/gratitude`])
  }
}
