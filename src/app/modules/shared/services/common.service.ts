import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import {HOME_LIKE, HOME_COMMENT} from 'src/app/constant/urls';
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

}
