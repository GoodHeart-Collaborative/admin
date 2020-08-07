import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HOME, EXPERT, EVENT, ACTION_EVENT, EVENT_DETAILS } from 'src/app/constant/urls';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(EVENT, params).toPromise();
  }

  async updateStatus(id, status) {
    return await this.$http.patch(ACTION_EVENT(id, status), {}).toPromise();
  }
  async  addCategory(params) {
    // return  this.$http.post(HOME, params).toPromise();
  }
  async  editCategory(id, params) {
    // return  this.$http.patch(HOME_DETAILS(id), params).toPromise();
  }


  async  updateDetails(id) {
    const data =  this.$http.get(EVENT_DETAILS(id)).toPromise();
    return data;
  }


}

@Injectable()
export class EventServiceResolve implements Resolve<any>  {
  constructor(private $daily: EventService) { }
  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.params['id'];
    return this.$daily.updateDetails(userId).catch(err => {
      if (err) {
        return null;
      }
    }
    );
  }
}
