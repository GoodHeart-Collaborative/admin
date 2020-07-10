import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UNICORN , UNICORN_DETAILS , ACTION_UNICORN} from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class DailyUnicornHumourService {
  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(UNICORN, params).toPromise();
  }

  async updateStatus(id, status) {
    // const params = {
    //   status : status
    // };
    return await this.$http.patch(ACTION_UNICORN(id, status), {}).toPromise();
  }
  async  addCategory(params) {
    return  this.$http.post(UNICORN, params).toPromise();
  }
  async  editCategory(id, params) {
    return  this.$http.patch(UNICORN_DETAILS(id), params).toPromise();
  }


  async  updateInspiration(id) {
    const data =  this.$http.get(UNICORN_DETAILS(id)).toPromise();
    return data;
  }

  showAlert(message) {
    this.$utilityService.showAlert(message);
  }
}

@Injectable()
export class DailyUnicornHumourServiceResolve implements Resolve<any>  {
  constructor(private $daily: DailyUnicornHumourService, private $router: Router) { }
  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.params['id'];
    return this.$daily.updateInspiration(userId).catch(err => {
      if (err) {
        return null;
      }
    }
    );
  }
}
