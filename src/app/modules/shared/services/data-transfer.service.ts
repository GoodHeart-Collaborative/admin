import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
// import { ADMIN } from 'src/app/constant/urls';

@Injectable({
    providedIn: 'root'
})
export class DataTransferService {
    profileDetail = new BehaviorSubject<any>(null);
    profileData;

    constructor(
        private _http: HttpService
    ) {
    }

    getProfileDetail() { 
        return new Observable((observer) => {
            if (this.profileData) {
                observer.next(this.profileData);
                observer.complete();
            } 
            // else {
            //     this._http.get(ADMIN).subscribe(
            //         response => {
            //             this.profileData = response;
            //             this.profileDetail.next({...response.data})
            //             observer.next(response);
            //             observer.complete();
            //         }, error => {
            //             observer.error(error);
            //         }
            //     );
            // }
        });
    }
}
