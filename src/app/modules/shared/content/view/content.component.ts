import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  types = ['1', '2', '4', '5'];
  type: any;
  content: any;
  constructor(private $http: ContentService,
              private $route: ActivatedRoute,
              private $router: Router) { }

  ngOnInit() {
    this.type = this.$route.snapshot.queryParams['type'];
    if (!this.type || !this.types.includes(this.type)) {
      this.$router.navigate(['not-found']);
    } else {
       this.getContentDetails();
    }
  }


 async getContentDetails() {
    const params = {
        type: this.type
    };
    const data = await this.$http.onGetContentDetails(params.type);
    this.content = data;
}
  // onGetContentDetails() {
  //   const params = {
  //       type: this.type
  //   };
  //   this.$http.onContentDetailsHandler(params).then(res => {
  //       console.log(res);
  //   });
  // }
}
