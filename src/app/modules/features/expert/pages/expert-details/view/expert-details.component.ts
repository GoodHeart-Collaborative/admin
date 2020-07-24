import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expert-details',
  templateUrl: './expert-details.component.html',
  styleUrls: ['./expert-details.component.scss']
})
export class ExpertDetailsComponent implements OnInit {

  constructor(private $router: Router) { }

  ngOnInit() {
  }

  onAddContent() {
      this.$router.navigate([`admin/expert/${'ddfdfsdfsddcscsc'}` , 'add']);
  }

}
