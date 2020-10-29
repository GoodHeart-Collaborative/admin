import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { CATEGORY_LISTING, EDIT_CATEGORY , 
  CATEGORY, CATEGORY_DETAILS, CATEGORY_POST_ACTION, 
  CATEGORY_POST_LISTING,
  ACTION_EVENT} from 'src/app/constant/urls';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventCategoryService {

  constructor(
    private $http: HttpService,
  ) { }

  async  queryData(params: any) {
    return  this.$http.get(CATEGORY_LISTING, params).toPromise();
  }

  async  queryUpadteData(params: any) {
    return  this.$http.get(CATEGORY_POST_LISTING, params).toPromise();
  }

  async  addCategory(params: any) {
    return  this.$http.post(CATEGORY, params).toPromise();
  }
   editCategory(id: string, params: any) {
    return  this.$http.patch(EDIT_CATEGORY(id), params).toPromise();
  }

  async onCategoryDetailsHandler(id: string) {
    return await this.$http.get(CATEGORY_DETAILS(id), {}).toPromise();
  }

  async updatePostStatus(id: string, status: any) {
    return await this.$http.patch(CATEGORY_POST_ACTION(id, status), {}).toPromise();
  }
  async updateEventPostStatus(id: string, status: any) {
    return await this.$http.patch(ACTION_EVENT(id, status), {}).toPromise();
  }

  async  updateCategory(id:string) {
    const categoryId = id;
    return  this.$http.get(CATEGORY_DETAILS(categoryId)).toPromise();
  }
}


// @Injectable()
// export class CEventCategoryServiceResolve implements Resolve<any>  {
//   constructor(private $category: EventCategoryService) { }
//   resolve(route: ActivatedRouteSnapshot) {
//     return this.$category.updateCategory(route.params['id']).catch(err => {
//       if (err) {
//         return null;
//       }
//     }
//     );
//   }
// }