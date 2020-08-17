import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedManagementComponent } from '../feed-management/view/feed-management.component';
import { FEED_LIST , ADD_FEED , FEED_DETAILS} from 'src/app/constant/routes';


const routes: Routes = [
  {
    path: '',
    component: FeedManagementComponent
    ,
    children: [
      {
        path: '',
        redirectTo: FEED_LIST.path,
        pathMatch: 'full',
      },
      {
        path: FEED_LIST.path,
        loadChildren: () => import('./pages/feed-listing/feed-listing.module')
          .then((m) => m.FeedListingModule
          ),
      },
      {
        path: ADD_FEED.path,
        loadChildren: () => import('./pages/add-feed/add-feed.module')
          .then((m) => m.AddFeedModule
          ),
      },
      {
        path: 'edit/:id',
        // resolve : {
        //   forumData : ForumServiceResolve
        // },
        loadChildren: () => import('./pages/add-feed/add-feed.module')
          .then((m) => m.AddFeedModule
          ),
      },
      {
        path: `${FEED_DETAILS.path}/details`,
        // resolve : {
        //   forumData : ForumServiceResolve
        // },
        loadChildren: () => import('./pages/feed-details/feed-details.module')
          .then((m) => m.FeedDetailsModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedManagementRoutingModule { }
