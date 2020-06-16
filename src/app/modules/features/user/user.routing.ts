import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { USER_LIST, USER_DETAIL } from '../../../constant/routes';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: USER_LIST.path,
        pathMatch: 'full',
      },
      {
        path: USER_LIST.path,
        loadChildren: () =>
          import('./user-listing/user-listing.routing').then(
            (m) => m.UserListingRouting
          ),
      },
      {
        path: `${USER_DETAIL.path}/:id`,
        loadChildren: () =>
          import('./user-detail/user-detail.routing').then(
            (m) => m.UserDetailRouting
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class UserRouting {}
