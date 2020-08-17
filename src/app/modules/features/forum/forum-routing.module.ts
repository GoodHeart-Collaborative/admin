import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './view/forum.component';
import { FORUM_LIST , ADD_FORUM , FORUM_DETAILS} from 'src/app/constant/routes';
import { ForumServiceResolve } from './service/forum.service';


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
      {
        path: 'edit/:id',
        resolve : {
          forumData : ForumServiceResolve
        },
        loadChildren: () => import('./pages/add-forum/add-forum.module')
          .then((m) => m.AddForumModule
          ),
      },
      {
        path: `${FORUM_DETAILS.path}/details`,
        resolve : {
          forumData : ForumServiceResolve
        },
        loadChildren: () => import('./pages/forum-details/forum-details.module')
          .then((m) => m.ForumDetailsModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
