import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class DailyInspirationService {

  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    // return  this.$http.get(CATEGORY_LISTING, params).toPromise();
  }

  async updateStatus(id, status) {
    // return await this.$http.patch(`admin/category/${id}/status/${status}`, {}).toPromise();
  }
}
