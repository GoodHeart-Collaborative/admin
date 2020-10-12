import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { CATEGORY, CATEGORY_DETAILS,
        EDIT_CATEGORY, CATEGORY_POST_LISTING,
        CATEGORY_LISTING, CATEGORY_POST_ACTION, CATEGORY_ACTION} from 'src/app/constant/urls';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {

  constructor(
    private $http: HttpService,
    private $utilityService: UtilityService
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
  async updateStatus(id: string, status: any) {
    return await this.$http.patch(CATEGORY_ACTION(id, status), {}).toPromise();
  }

  async updatePostStatus(id: string, status: any) {
    return await this.$http.patch(CATEGORY_POST_ACTION(id, status), {}).toPromise();
  }
  async onCategoryDetailsHandler(id: string) {
    return await this.$http.get(CATEGORY_DETAILS(id), {}).toPromise();
  }

  async  updateCategory(id:string) {
    const categoryId = id;
    return  this.$http.get(CATEGORY_DETAILS(categoryId)).toPromise();
  }
}

@Injectable()
export class CategoryManagementServiceResolve implements Resolve<any>  {
  constructor(private $category: CategoryManagementService, private $router: Router) { }
  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.params['id'];
    return this.$category.updateCategory(userId).catch(err => {
      if (err) {
        return null;
      }
    }
    );
  }
}
