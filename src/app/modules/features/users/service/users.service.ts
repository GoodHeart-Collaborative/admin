import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { BreadcrumbService } from 'src/app/modules/shared/components/breadcrumb/service/breadcrumb.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private $http: HttpService,
  
  ) { }

  async  queryData(params) {
    console.log(params);
    return  this.$http.get(`admin/users`, params).toPromise();
  }

  async onDetailsHandler(id) {
    const {data} = await this.$http.get(`admin/users/${id}`).toPromise();
    return data;
  }
}
