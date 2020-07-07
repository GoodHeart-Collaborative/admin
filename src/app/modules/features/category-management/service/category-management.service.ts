import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { CATEGORY, CATEGORY_LISTING } from 'src/app/constant/urls';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {

  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(CATEGORY_LISTING, params).toPromise();
  }

  async  addCategory(params) {
    return  this.$http.post(CATEGORY, params).toPromise();
  }

  showAlert(message) {
    this.$utilityService.showAlert(message);
  }
}
