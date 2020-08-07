import { Injectable } from '@angular/core';
import { EVENT, ACTION_EVENT, EVENT_DETAILS } from 'src/app/constant/urls';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HttpService } from 'src/app/modules/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  constructor(private $http: HttpService) { }

  async updateEventStatus(id, status) {
    return await this.$http.patch(ACTION_EVENT(id , status), {}).toPromise();
  }

  async  updateDetails(id) {
    const data =  this.$http.get(EVENT_DETAILS(id)).toPromise();
    return data;
  }
}

@Injectable()
export class UserEventServiceResolve implements Resolve<any>  {
  constructor(private $daily: UserEventService) { }
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