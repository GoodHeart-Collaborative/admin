import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './view/forum.component';
import { FORUM_LIST , ADD_FORUM } from 'src/app/constant/routes';


const routes: Routes = [
  {
    path: '',
    component: ForumComponent,
    children: [
      {
        path: '',
        redirectTo: FORUM_LIST.path,
        pathMatch: 'full',
      },
      {
        path: FORUM_LIST.path,
        loadChildren: () => import('./pages/forum-listing/forum-listing.module')
          .then((m) => m.ForumListingModule
          ),
      },
      {
        path: ADD_FORUM.path,
        loadChildren: () => import('./pages/add-forum/add-forum.module')
          .then((m) => m.AddForumModule
          ),
      },
      // {
      //   path: `${FORUM_DETAIL.path}/details`,
      //   resolve : {
      //     dailyData : DailyUnicornHumourServiceResolve
      //   },
      //   loadChildren: () => import('./pages/notification-details/notification-details.module')
      //     .then((m) => m.NotificationDetailsModule
      //     ),
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
