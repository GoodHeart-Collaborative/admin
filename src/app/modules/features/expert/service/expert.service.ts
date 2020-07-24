import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { EXPERT , GRATITUDE} from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(GRATITUDE, params).toPromise();
  }

  async updateStatus(id, status) {
    const params = {
      status : status
    };
    // return await this.$http.patch(DAILY_INSPIRATION_ACTION(id), params).toPromise();
  }

  async  add(params) {
    // return  this.$http.post(DAILY_INSPIRATION, params).toPromise();
  }
  async  edit(id, params) {
    // return  this.$http.patch(EDIT_DAILY_INSPIRATION(id), params).toPromise();
  }

  async  updateDetails(id) {
    // const data =  this.$http.get(DAILY_INSPIRATION_DETAILS(id)).toPromise();
    // return data;
  }

}

// @Injectable()
// export class ArticleManagementServiceResolve implements Resolve<any>  {
//   constructor(private $daily: ArticleManagementService, private $router: Router) { }
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