import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import {HOME_LIKE, HOME_COMMENT, ACTION_USER} from 'src/app/constant/urls';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private $http: HttpService) { }

 async onLikeHandler(params) {
      return this.$http.get(HOME_LIKE , params).toPromise();
  }
 async onCommentHandler(params) {
      return this.$http.get(HOME_COMMENT , params).toPromise();
  }

  async updateStatus(id, status) {
    return await this.$http.patch(ACTION_USER(id, status), {}).toPromise();
  }


}
