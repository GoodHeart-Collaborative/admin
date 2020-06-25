import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: any;
  name: string;

  constructor(
    private $router: ActivatedRoute,
    private $userService: UsersService,
    private $breadcrumb: BreadcrumbService
  ) {
    this.id = this.$router.snapshot.params.id;
    console.log(this.id);
    this.$userService.onDetailsHandler(this.id).then(res => {
     this.$breadcrumb.replace(this.id , res['firstName']);
      console.log(res);
      
    });
   }

  ngOnInit() {
  }

}
