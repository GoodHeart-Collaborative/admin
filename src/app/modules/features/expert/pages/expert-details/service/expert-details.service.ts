import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { EXPERT_POST, ACTION_EXPERT_POST, EXPERT_POST_DETAILS } from 'src/app/constant/urls';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExpertDetailsService {
  constructor(
    private $http: HttpService,
  ) { }

  async  queryData(params) {
    return this.$http.get(EXPERT_POST, params).toPromise();
  }

  async updateStatus(id, status) {
    return await this.$http.patch(ACTION_EXPERT_POST(id, status), {}).toPromise();
  }

  async  add(params) {
    // return  this.$http.post(DAILY_INSPIRATION, params).toPromise();
  }
  async  edit(id, params) {
    // return  this.$http.patch(EDIT_DAILY_INSPIRATION(id), params).toPromise();
  }

  async  updateDetails(id) {
    const data = this.$http.get(EXPERT_POST_DETAILS(id)).toPromise();
    return data;
  }

}

@Injectable()
export class ExpertDetailsServiceResolve implements Resolve<any>  {
  constructor(private $daily: ExpertDetailsService) { }
  resolve(route: ActivatedRouteSnapshot) {
    console.log(route.parent.params.id);
    return this.$daily.updateDetails(route.parent.params.id).catch(err => {
      if (err) {
        return null;
      }
    }
    );
  }
}