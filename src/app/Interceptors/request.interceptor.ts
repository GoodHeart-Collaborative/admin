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
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilityService } from '../modules/shared/services/utility.service';
import { LoaderService } from '../modules/shared/services/loader.service';
import { LOGIN } from '../constant/routes';
import {
    POPUP_MESSAGES,
    SOMETHING_WENT_WRONG,
    SLOW_INTERNET_CONNECTION,
  } from '../constant/messages';
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private loaderService: LoaderService
    ) {
    }

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
                        // tslint:disable-next-line: max-line-length
                        if ((err.status === 401 || err.error.responseType === 'UNAUTHORIZED') || (err.status === 423 || err.error.type === '"SESSION_EXPIRED"') ) {
                            message = SOMETHING_WENT_WRONG;

                            this.utilityService.clearStorage();
                            this.router.navigate([LOGIN.fullUrl]);
                        }
                        if (err.status === 504 || err.status === 0) {
                            message = SLOW_INTERNET_CONNECTION;
                        } 
                        this.utilityService.errorAlert(message);
                    }
                }
         ));
    }
}
