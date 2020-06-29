import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  types = ['1', '2', '4', '5'];
  type: any;
  constructor(private $http: HttpService, private $route: ActivatedRoute, private $router: Router) { }

  ngOnInit() {
    this.type = this.$route.snapshot.queryParams['type'];
    if (!this.type || !this.types.includes(this.type)) {
      this.$router.navigate(['not-found']);
    }
  }

  onclick() {
    this.$router.navigate([`content/view`], { queryParams: { type: 3 } })
  }
}
