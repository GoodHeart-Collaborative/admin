import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './view/users.component';
import { USER_LIST } from '../../../constant/routes';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
