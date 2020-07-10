import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ADVICE, ADVICE_DETAILS, ACTION_ADVICE } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class DailyAdviceManagementService {
  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(ADVICE, params).toPromise();
  }

  async updateStatus(id, status) {
    // const params = {
    //   status : status
    // };
    return await this.$http.patch(ACTION_ADVICE(id, status), {}).toPromise();
  }

  async  addCategory(params) {
    return  this.$http.post(ADVICE, params).toPromise();
  }
  async  editCategory(id, params) {
    return  this.$http.patch(ADVICE_DETAILS(id), params).toPromise();
  }

  async  updateInspiration(id) {
    const data =  this.$http.get(ADVICE_DETAILS(id)).toPromise();
    return data;
  }

}

@Injectable()
export class DailyAdviceManagementServiceResolve implements Resolve<any>  {
  constructor(private $daily: DailyAdviceManagementService, private $router: Router) { }
  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.params['id'];
    return this.$daily.updateInspiration(userId).catch(err => {
      if (err) {
        // this.$router.navigate([DAILY_INSPIRATION]);
        return null;
      }
    }
    );
  }
}

