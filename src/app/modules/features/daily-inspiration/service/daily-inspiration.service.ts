import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import {  DAILY_INSPIRATION , DAILY_INSPIRATION_DETAILS , EDIT_DAILY_INSPIRATION} from 'src/app/constant/urls';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DailyInspirationService {

  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(DAILY_INSPIRATION, params).toPromise();
  }

  async updateStatus(id, status) {
    const params = {
      status : status
    };
    return await this.$http.patch(`admin/inspiration/${id}/status`, params).toPromise();
  }
  async  addCategory(params) {
    return  this.$http.post(DAILY_INSPIRATION, params).toPromise();
  }
  async  editCategory(id, params) {
    return  this.$http.patch(EDIT_DAILY_INSPIRATION(id), params).toPromise();
  }


  async  updateInspiration(id) {
    const data =  this.$http.get(DAILY_INSPIRATION_DETAILS(id)).toPromise();
    return data;
  }

  showAlert(message) {
    this.$utilityService.showAlert(message);
  }
}

@Injectable()
export class DailyInspirationServiceResolve implements Resolve<any>  {
  constructor(private $daily: DailyInspirationService, private $router: Router) { }
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