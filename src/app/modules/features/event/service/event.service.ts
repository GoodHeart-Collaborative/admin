import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HOME, EXPERT } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(EXPERT, params).toPromise();
  }

  async updateStatus(id, status) {
    // return await this.$http.patch(ACTION_HOME(id, status), {}).toPromise();
  }
  async  addCategory(params) {
    // return  this.$http.post(HOME, params).toPromise();
  }
  async  editCategory(id, params) {
    // return  this.$http.patch(HOME_DETAILS(id), params).toPromise();
  }


  async  updateInspiration(id) {
    // const data =  this.$http.get(HOME_DETAILS(id)).toPromise();
    // return data;
  }


}

// @Injectable()
// export class DailyInspirationServiceResolve implements Resolve<any>  {
//   constructor(private $daily: DailyInspirationService, private $router: Router) { }
//   resolve(route: ActivatedRouteSnapshot) {
//     const userId = route.params['id'];
//     return this.$daily.updateInspiration(userId).catch(err => {
//       if (err) {
//         // this.$router.navigate([DAILY_INSPIRATION]);
//         return null;
//       }
//     }
//     );
//   }
// }
