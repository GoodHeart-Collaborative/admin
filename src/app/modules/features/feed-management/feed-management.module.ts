import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedManagementRoutingModule } from './feed-management-routing.module';
import { FeedManagementComponent } from './view/feed-management.component';
import { FeedService } from './service/feed.service';


@NgModule({
  declarations: [FeedManagementComponent],
  imports: [
    CommonModule,
    FeedManagementRoutingModule
  ],
  providers: [FeedService]
})
export class FeedManagementModule { }
