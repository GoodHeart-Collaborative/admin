import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { SHOUTOUTS_DETAILS } from 'src/app/constant/urls';
import { requiredMedia } from 'src/app/constant/messages';

@Injectable({
  providedIn: 'root'
})
export class UserShoutoutsService {

  constructor(private $http: HttpService) { }

  async updateEventStatus(id, status) {
    // return await this.$http.patch(ACTION_EVENT(id , status), {}).toPromise();
  }

  async  updateDetails(id) {
    const data = this.$http.get(SHOUTOUTS_DETAILS(id)).toPromise();
    return (await data).data;
  }

  async  onGoingAndInterestHnadler(params) {
    // return  this.$http.get(EVENT_INTREST, params).toPromise();
  }
}

@Injectable()
export class UserShoutoutsServiceResolve implements Resolve<any>  {
  constructor(private $daily: UserShoutoutsService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this.$daily.updateDetails(route.params['id']).catch(err => {
      if (err) {
        return null;
      }
    }
    );
  }
}
