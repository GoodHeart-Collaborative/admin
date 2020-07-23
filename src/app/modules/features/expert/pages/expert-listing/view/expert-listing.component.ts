import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EXPERT, ADD_EXPERT } from 'src/app/constant/routes';

@Component({
  selector: 'app-expert-listing',
  templateUrl: './expert-listing.component.html',
  styleUrls: ['./expert-listing.component.scss']
})
export class ExpertListingComponent implements OnInit {

  constructor(private $router: Router) { }

  ngOnInit() {
  }

  onDetails(id) {
    this.$router.navigate([`${EXPERT.fullUrl}`, id, 'details']);
  }

 onAdd() {
    this.$router.navigate([`${ADD_EXPERT.fullUrl}`]);
 }

}
