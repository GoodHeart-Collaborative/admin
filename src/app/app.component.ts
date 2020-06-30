import {Component, OnInit} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel} from '@angular/router';
import {LoaderService} from './modules/shared/services/loader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    loader = false;

    constructor(private router: Router, private loaderService: LoaderService) {

    }

    ngOnInit() {
        this.listenRouterEvents();
    }

    /**
     * Method for initiating and stopping loader on route change
     */
    listenRouterEvents() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.loaderService.showLoader();
            } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.loaderService.hideLoader();
            }
        });
        this.loaderService.loader.subscribe(
            data => {
                setTimeout(() => {
                    this.loader = data;
                });
            }
        );
    }

}
