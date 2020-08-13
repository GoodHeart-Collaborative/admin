import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { FORUM , EXPERT} from 'src/app/constant/urls';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(EXPERT, params).toPromise();
  }

  async updateStatus(id, status) {
    // return await this.$http.patch(ACTION_EXPERT(id , status), {}).toPromise();
  }

  async  add(params) {
    // return  this.$http.post(ADD_EXPERT, params).toPromise();
  }
  async  edit(id, params) {
    // return  this.$http.patch(EXPERT_DETAILS(id), params).toPromise();
  }

  async  updateDetails(id) {
    // const data =  this.$http.get(EXPERT_DETAILS(id)).toPromise();
    // return data;
  }

}

@Injectable()
export class ForumServiceResolve implements Resolve<any>  {
  constructor(private $daily: ForumService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this.$daily.updateDetails(route.params['id']).catch(err => {
      if (err) {
        return null;
      }
    }
    );
  }
}
