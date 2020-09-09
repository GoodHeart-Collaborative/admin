import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { NOTIFICATION, ACTION_NOTIFICATION, NOTIFICATION_DETAILS } from 'src/app/constant/urls';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private $http: HttpService,
  ) { }

  async  queryData(params) {
    return this.$http.get(NOTIFICATION, params).toPromise();
  }

  async updateStatus(id) {
    return await this.$http.delete(ACTION_NOTIFICATION(id)).toPromise();
  }
  async  add(params) {
    return  this.$http.post(NOTIFICATION, params).toPromise();
  }

async  updateDetails(id) {
    const params = {
      notificationId: id
    };
    const data = this.$http.get(NOTIFICATION_DETAILS, params).toPromise();
    return data;
  }


}

@Injectable()
export class NotificationsServiceResolve implements Resolve<any>  {
  constructor(private $notification: NotificationsService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this.$notification.updateDetails(route.params['id']).catch(err => {
      if (err) {
        return null;
      }
    }
    );
  }
}
