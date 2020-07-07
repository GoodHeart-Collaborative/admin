import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {

  constructor(
    private $http: HttpService,
  ) { }

  async  queryData(params) {
    // return  this.$http.get(USER, params).toPromise();
  }
}
