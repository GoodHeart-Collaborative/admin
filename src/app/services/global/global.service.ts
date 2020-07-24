import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public partnerData = null;
  private $banks: BehaviorSubject<any[]> = new BehaviorSubject(null);
  readonly banks = this.$banks.asObservable();
  private $regions: BehaviorSubject<any[]> = new BehaviorSubject(null);
  private $stripe: ReplaySubject<any> = new ReplaySubject(null);
  readonly stripeChanges = this.$stripe.asObservable();
  readonly regions = this.$regions.asObservable();
  partnerDataEvent = new EventEmitter();
  constructor(private $http: HttpService) {
    // this.fetchRegions();
  }
  // async fetchRegions() {
  //   if (!this.$regions.getValue()) {
  //     const { data } = await this.$http.get(`~/content/regions`);
  //     this.$regions.next(data);
  //   }
  // }
  // async fetauredCities() {
  //   const { data } = await this.$http.get(`~/cities/featured`);
  //   return data;
  // }
  encodeData(data: any) {
    return window.btoa(JSON.stringify(data));
  }
  decodeData(data: string) {
    return JSON.parse(window.atob(data));
  }
  moveToError() {
    setTimeout(() => {
      const errElement = document.querySelector('mat-error');
      if (errElement) {
        const rootElement = errElement.parentElement.parentElement.parentElement;
        rootElement.scrollIntoView();
      }
    });
  }
  // async queryBanks() {
  //   if (!this.$banks.getValue()) {
  //     const { data } = await this.$http.get(`~/banks/shuffle`);
  //     this.$banks.next(data);
  //   }
  // }
}