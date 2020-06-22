import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { USER, DASHBOARD } from '../../constant/routes';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: DASHBOARD.path, pathMatch: 'full' },
      {
        path: DASHBOARD.path,
        loadChildren: () =>
          import('./../features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      // {
      //   path: USER.path,
      //   loadChildren: () =>
      //     import('./../features/user/user.module').then((m) => m.UserModule),
      // },
      {
        path: USER.path,
        loadChildren: () =>
          import('./../features/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LayoutRoutingModule {}
