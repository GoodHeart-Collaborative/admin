import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './view/users.component';
import { USER_LIST, USER_DETAIL ,GRATITUDE_DETAIL} from '../../../constant/routes';
import { UsersServiceResolve } from './service/users.service';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: USER_LIST.path,
        pathMatch: 'full',
      },
      {
        path: USER_LIST.path,
        loadChildren: () => import('./pages/user-listing/user-listing.module').then( (m) => m.UserListingModule),
      },
      {
        path: `${USER_DETAIL.path}`,
        resolve: {
          UserDetails : UsersServiceResolve
        },
        loadChildren: () => import('./pages/user-detail/user-detail.module').then( (m) => m.UserDetailModule),
      },
      {
        path: `${GRATITUDE_DETAIL.path}`,
        loadChildren: () => import('./pages/user-detail/user-gratitude-journal/gratitude-journal-detail/gratitude-journal-detail.module').then( (m) => m.GratitudeJournalDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
