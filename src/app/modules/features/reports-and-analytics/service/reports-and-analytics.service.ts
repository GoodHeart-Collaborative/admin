import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { REPORT } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class ReportsAndAnalyticsService {

  constructor(
    private $http: HttpService,
  ) { }

  async  queryData(params) {
    return  this.$http.get(REPORT, params).toPromise();
  }
}
