import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { DASHBOARD } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private $http: HttpService,
  ) { }

 onDrashboardHandler() {
    return this.$http.get(DASHBOARD).toPromise();
  }
}
