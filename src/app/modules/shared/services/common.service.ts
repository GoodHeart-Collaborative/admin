import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HOME_LIKE, HOME_COMMENT, MEMBER, USER, REPORT } from 'src/app/constant/urls';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  dashBoardFlag$ = new BehaviorSubject(false);
  params = {
    pageNo: 1,
    limit: 100,
  };
  constructor(private $http: HttpService) { }


  async onLikeHandler(id: string, postId?: string) {
    if (!postId && id) {
      this.params['postId'] = id;
      return this.$http.get(HOME_LIKE, this.params).toPromise();
    }
    if (postId && id) {
      this.params['postId'] = postId;
      this.params['commentId'] = id;
      return this.$http.get(HOME_LIKE, this.params).toPromise();
    }
  }

  async onCommentHandler(params) {
    return this.$http.get(HOME_COMMENT, params).toPromise();
  }

  async onReportProblemHandler(id: string, type: number) {
    console.log(id);
    
    this.params['postId'] = id;
    this.params['type'] = type;
    return this.$http.get(REPORT, this.params).toPromise();
  }

  async updateStatus(userId: string, params) {
    return await this.$http.patch(`admin/user/${userId}/status`, params).toPromise();
  }

  async  querymemberData(params) {
    return this.$http.get(MEMBER, params).toPromise();
  }

  async  queryUserData(params) {
    return this.$http.get(USER, params).toPromise();
  }

}
