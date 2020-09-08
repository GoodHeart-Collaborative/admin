import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { CALENDER , ACTION_CALENDER } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  constructor(
    private $http: HttpService,
  ) { }

  async  queryData(params) {
    return  this.$http.get(CALENDER, params).toPromise();
  }

  async updateStatus(id, status) {
    return await this.$http.patch(ACTION_CALENDER(id, status), {}).toPromise();
  }
}
