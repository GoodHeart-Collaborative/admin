import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilityService } from '../modules/shared/services/utility.service';
import { LoaderService } from '../modules/shared/services/loader.service';
import { LOGIN } from '../constant/routes';
import {
    SOMETHING_WENT_WRONG,
    SLOW_INTERNET_CONNECTION,
  } from '../constant/messages';
import { MatDialog } from '@angular/material';
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    connectionStatus =  true;
    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private loaderService: LoaderService,
        private dialog: MatDialog,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const headers = {
            'authorization': 'Basic ' + btoa(`${'wc'}:${'wc@123'}`),
            'timezone': (new Date().getTimezoneOffset()).toString(),
            'platform' : '3',
            'api_key': '1234'

        };
        const token = this.utilityService.getAuthToken();
        if (token) {
            headers['authorization'] = 'Bearer ' + token;
        }
        request = request.clone({
            setHeaders: headers
        });

        return next.handle(request).pipe(
            tap(
                (data) => {
                    if (data instanceof HttpResponse) {
                        this.loaderService.hideLoader();
                    }
                },
                (err: any) => {
                    this.loaderService.hideLoader();
                    if (err instanceof HttpErrorResponse) {
                        let message = err.message;
                        if (err.status === 400 ) {
                            message = err.error.message;
                            this.utilityService.errorAlert(message);
                            return;
                        }
                        if ((err.status === 401 || err.error.responseType === 'UNAUTHORIZED' ) 
                        || err.status === 504
                        || err.status === 503) {
                            message = SOMETHING_WENT_WRONG;
                        }
                        if ((err.status === 423 || err.error.type === 'SESSION_EXPIRED')
                        || (err.status === 403 || err.error.type === 'INCORRECT_PASSWORD')
                        || (err.status === 401 || err.error.type === 'INVALID_TOKEN')
                        || err.status === 500  ) {
                            message = err.error.message;
                        }
                        if ( err.status === 0 ) {
                            message =  navigator.onLine ? SOMETHING_WENT_WRONG : SLOW_INTERNET_CONNECTION;
                        }
                        if ( err.error.type === 'INVALID_TOKEN'
                        ||  err.error.type === 'SESSION_EXPIRED'
                        || err.error.responseType === 'UNAUTHORIZED' ) {
                            this.utilityService.clearStorage();
                            this.router.navigate([LOGIN.fullUrl]);
                            
                        }
                        this.utilityService.errorAlert(message || SOMETHING_WENT_WRONG);
                    }
                }
         ));
    }
}
