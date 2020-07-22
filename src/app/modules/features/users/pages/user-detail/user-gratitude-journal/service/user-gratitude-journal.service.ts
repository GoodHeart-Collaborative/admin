import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { GRATITUDE, GRATITUDE_DETAILS, ACTION_GRATITUDE } from 'src/app/constant/urls';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGratitudeJournalService {

  constructor(
    private $http: HttpService,
  ) { }

  async  queryData(params) {
    return  this.$http.get(GRATITUDE, params).toPromise();
  }

  async onDetailsHandler(id) {
    const {data} = await this.$http.get(`${GRATITUDE_DETAILS(id)}`).toPromise();
    return data;
  }

  async updateStatus(id, status) {
    return await this.$http.patch(ACTION_GRATITUDE(id , status), {}).toPromise();
  }

}

@Injectable()
export class UserGratitudeJournalServiceResolve implements Resolve<any>  {
  constructor(
    private $UserGratitudeJournalService: UserGratitudeJournalService,
    private $router: Router) { }
  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.params['id'];
    return this.$UserGratitudeJournalService.onDetailsHandler(userId).catch(err => {
      if (err) {
        console.error(err);
      }
    }
    );
  }
}