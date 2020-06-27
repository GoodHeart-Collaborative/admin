import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../service/users.service';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: string;
  userDetails: any;

  constructor(
    private $router: ActivatedRoute,
    private $breadcrumb: BreadcrumbService
  ) {
    console.log(this.$router.snapshot.data.UserDetails);
    this.userDetails = this.$router.snapshot.data.UserDetails;
    this.$breadcrumb.replace(this.userDetails.id, this.userDetails['firstName']);
  }
  ngOnInit() { }


}
