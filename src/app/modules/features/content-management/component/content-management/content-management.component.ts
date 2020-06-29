import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ContentService } from 'src/app/modules/shared/services/content.service';

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

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private $http: ContentService) {
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
        const data = await this.$http.onGetContentDetails(params.type);
        this.content = data;
    }


    // onGetContentDetails() {
    //     const params = {
    //         type: (+this.selectedTab) < 2 ? (+this.selectedTab) + 1 : (+this.selectedTab) + 2
    //     };
    //     fetch(`http://womencomdevapi.appskeeper.com/v1/content/view?type=${params.type}`)

    //         .then(response => {
    //             if (response.ok) {
    //                 return response.clone().text(); //then consume it again, the error happens
    //              }
    //            }).then(res => {
    //             console.log(res);
    //             this.content = res;
    //         });
    // }
    // onGetContentDetails() {
    //     const params = {
    //         type: (+this.selectedTab) < 2 ? (+this.selectedTab) + 1 : (+this.selectedTab) + 2
    //     }
    //     this.$http.onContentDetailsHandler(params).then(res => {
    //         console.log(res);
    //     });
    //   }

    onAddContent() {
        const data = {
            "title": "string",
            "description": "string",
            "type": "1"
        };
        this.$http.onAddContentHnadler(data).then(res => {
            console.log(res);

        });
    }
    onEditContent() {
        const data = {
            "title": "string",
            "description": "string",
        };
        this.$http.onEditContentHnadler(data).then(res => {
            console.log(res);

        });
    }

    checkForInvalidCases() {
        if (!this.selectedTab || !this.types.includes(this.selectedTab)) {
            this.router.navigate(['not-found']);
            return true;
        }
        return false;
        console.log(this.types.includes(this.selectedTab))
    }
}
