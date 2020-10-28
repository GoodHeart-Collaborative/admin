import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { FORUM , EDIT_FORUM, ACTION_FORUM , ADD_FORUM , FORUM_DETAILS} from 'src/app/constant/urls';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
  ) { }

  async  queryData(params) {
    return  this.$http.get(FORUM, params).toPromise();
  }

  async updateStatus(id, status) {
    return await this.$http.patch(ACTION_FORUM(id , status), {}).toPromise();
  }

  async  add(params) {
    return  this.$http.post(ADD_FORUM, params).toPromise();
  }
  async  edit(id, params) {
    return  this.$http.patch(EDIT_FORUM(id), params).toPromise();
  }

  async  updateDetails(id: string, type: string) {
    const params = {
      userType: type
    };
    const data =  this.$http.get(FORUM_DETAILS(id), params).toPromise();
    return data;
  }

}

@Injectable()
export class ForumServiceResolve implements Resolve<any>  {
  constructor(private $daily: ForumService, private $route: Router ) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this.$daily.updateDetails(route.params['id'], route.queryParams.type).catch(err => {
    }
    );
  }
}
