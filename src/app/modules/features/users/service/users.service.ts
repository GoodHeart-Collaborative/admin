import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { USER , USER_DETAILS} from 'src/app/constant/urls';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private $http: HttpService,
  ) { }

  async  queryData(params) {
    console.log(params);
    return  this.$http.get(USER, params).toPromise();
  }

  async onDetailsHandler(id) {
    const {data} = await this.$http.get(`${USER_DETAILS(id)}`).toPromise();
    return data;
  }
}

// @Injectable()
// export class UsersServiceResolve implements Resolve<any>  {
//   constructor(private $UsersService: UsersService, private $router: Router) { }
//   resolve(route: ActivatedRouteSnapshot) {
//     const userId = route.params['userId'];
//     return this.$UsersService.onDetailsHandler(userId).catch(err => {
//       console.log(err);
//       if (err) {
//         // this.$router.navigate(['admin/users']);
//         return null;
//       }
//     }
//     );
//   }
// }
