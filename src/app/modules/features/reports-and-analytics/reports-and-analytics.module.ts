import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsAndAnalyticsComponent } from './view/reports-and-analytics.component';
import { Routes } from '@angular/router';
import { REPORTS_AND_ANALYTICS , REPORTS_AND_ANALYTICS_LIST} from 'src/app/constant/routes';

const routes: Routes = [
  {
    path: '',
    component: ReportsAndAnalyticsComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: REPORTS_AND_ANALYTICS_LIST.path,
      //   pathMatch: 'full',
      // },
      // {
      //   path: REPORTS_AND_ANALYTICS_LIST.path,
      //   loadChildren: () => import('./pages/forum-listing/forum-listing.module')
      //     .then((m) => m.ForumListingModule
      //     ),
      // },
      // {
      //   path: ADD_REPORTS_AND_ANALYTICS.path,
      //   loadChildren: () => import('./pages/add-forum/add-forum.module')
      //     .then((m) => m.AddForumModule
      //     ),
      // },
      // {
      //   path: 'edit/:id',
        // resolve : {
        //   forumData : ForumServiceResolve
        // },
      //   loadChildren: () => import('./pages/add-forum/add-forum.module')
      //     .then((m) => m.AddForumModule
      //     ),
      // },
      // {
      //   path: `${FORUM_DETAILS.path}/details`,
      //   // resolve : {
      //   //   forumData : ForumServiceResolve
      //   // },
      //   loadChildren: () => import('./pages/forum-details/forum-details.module')
      //     .then((m) => m.ForumDetailsModule
      //     ),
      // },
    ]
  }
];

@NgModule({
  declarations: [ReportsAndAnalyticsComponent],
  imports: [
    CommonModule
  ]
})
export class ReportsAndAnalyticsModule { }
