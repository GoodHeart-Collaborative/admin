import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { CATEGORY_LISTING } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class EventCategoryService {

  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params: any) {
    return  this.$http.get(CATEGORY_LISTING, params).toPromise();
  }
}
