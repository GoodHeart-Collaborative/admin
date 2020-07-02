import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ContentService } from 'src/app/modules/shared/services/content.service';
import { PopupService } from 'src/app/modules/shared/popup';

@Component({
    selector: 'app-content-management',
    templateUrl: './content-management.component.html',
    styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
    types = ['0', '1', '2', '3'];
    content;
    contentTabs = [
        { tabName: 'Privacy Policy' },
        { tabName: 'Term and Conditions' },
        { tabName: 'FAQs' },
        { tabName: 'Contact Us' },
    ];
    selectedTab: any;
    data: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private $http: ContentService,
        private $popUp: PopupService) {
    }

    ngOnInit() {
        this.bindToQuery();
    }

    /**
     * Bind and focus the tab which was set before unload
     */
    bindToQuery() {
        this.activatedRoute.queryParams.subscribe(
            query => {
                this.selectedTab = query.tab;
                if (!this.checkForInvalidCases()) {

                    this.getContentDetails();
                }
            }
        );
    }

    /**
     * On tab change, append query param in route
     * @param event MatTabChangeEvent
     */
    onTabChange(event: MatTabChangeEvent) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                tab: event.index
            },
            queryParamsHandling: 'merge',
        });
    }

    async getContentDetails() {
        this.content = '';
        const params = {
            type: (+this.selectedTab) < 2 ? (+this.selectedTab) + 1 : (+this.selectedTab) + 2
        };
        this.data = await this.$http.onGetContentDetails(params.type);
        if (this.data && this.data.data.description) {
            this.content = this.data.data.description;

        }
    }

 onAddContent(event) {
        console.log(event);
        const data = {
            title: this.data.data.title,
            description: event.content,
            type: this.data.data.type
        };
        this.$http.onAddContentHnadler(data).then(res => {
         });
    }

    onEditContent(event) {
        const data = {
            title: this.data.data.title,
            description: event.content,
        };
        this.$http.onEditContentHnadler(this.data.data._id, data).then(res => {
            this.$popUp.success(res.message);
        }).catch( (err) => {
                this.$popUp.success(err.message);
         });
    }

    checkForInvalidCases() {
        if (!this.selectedTab || !this.types.includes(this.selectedTab)) {
            this.router.navigate(['not-found']);
            return true;
        }
        return false;
    }
}
