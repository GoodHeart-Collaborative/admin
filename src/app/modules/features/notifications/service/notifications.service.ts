import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { EXPERT  } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private $http: HttpService,
  ) { }

  async  queryData(params) {
    return  this.$http.get(EXPERT, params).toPromise();
  }

  async updateStatus(id, status) {
    // return await this.$http.patch(ACTION_HOME(id, status), {}).toPromise();
  }
  async  add(params) {
    // return  this.$http.post(HOME, params).toPromise();
  }
  async  edit(id, params) {
    // return  this.$http.patch(HOME_DETAILS(id), params).toPromise();
  }


  async  updateDetails(id) {
    // const data =  this.$http.get(HOME_DETAILS(id)).toPromise();
    // return data;
  }


}

// @Injectable()
// export class DailyInspirationServiceResolve implements Resolve<any>  {
//   constructor(private $daily: DailyInspirationService, private $router: Router) { }
//   resolve(route: ActivatedRouteSnapshot) {
//     const userId = route.params['id'];
//     return this.$daily.updateDetails(userId).catch(err => {
//       if (err) {
//         // this.$router.navigate([DAILY_INSPIRATION]);
//         return null;
//       }
//     }
//     );
//   }
// }
