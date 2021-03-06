import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { EXPERT, ACTION_EXPERT, ADD_EXPERT , EXPERT_DETAILS, EXPERT_POST, EXPERT_POST_DETAILS} from 'src/app/constant/urls';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(EXPERT, params).toPromise();
  }

  async updateStatus(id, status) {
    return await this.$http.patch(ACTION_EXPERT(id , status), {}).toPromise();
  }

  async  add(params) {
    return  this.$http.post(ADD_EXPERT, params).toPromise();
  }
  async  addContent(params) {
    return  this.$http.post(EXPERT_POST, params).toPromise();
  }
  async  edit(id, params) {
    return  this.$http.patch(EXPERT_DETAILS(id), params).toPromise();
  }
  async  editContent(id, params) {
    return  this.$http.patch(EXPERT_POST_DETAILS(id), params).toPromise();
  }

  async  updateDetails(id) {
    const data =  this.$http.get(EXPERT_DETAILS(id)).toPromise();
    return data;
  }

}

@Injectable()
export class ExpertServiceResolve implements Resolve<any>  {
  constructor(private $daily: ExpertService, private $router: Router) { }
  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.params['id'];
    return this.$daily.updateDetails(userId)
    .catch(err => {
      if (err) {
        return null;
      }
    }
    );
  }
}