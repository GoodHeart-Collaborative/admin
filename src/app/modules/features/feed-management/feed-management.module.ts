import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedManagementRoutingModule } from './feed-management-routing.module';
import { FeedManagementComponent } from './view/feed-management.component';
import { FeedService } from './service/feed.service';
import { MatTabsModule } from '@angular/material';
import { GratitudeFeedListingModule } from './pages/gratitude-feed-listing/gratitude-feed-listing.module';
import { ShoutoutsListingModule } from './pages/shoutouts-listing/shoutouts-listing.module';


@NgModule({
  declarations: [FeedManagementComponent],
  imports: [
    CommonModule,
    FeedManagementRoutingModule,
    MatTabsModule,
    GratitudeFeedListingModule,
    ShoutoutsListingModule,
  ],
  providers: [FeedService]
})
export class FeedManagementModule { }
