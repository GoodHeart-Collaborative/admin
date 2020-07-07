import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { USER, DASHBOARD , CONTENT_MANAGEMENT , CATEGORY} from '../../constant/routes';

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
            (m) => m.DashboardModule),
      },
      {
        path: USER.path,
        loadChildren: () =>
          import('./../features/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: CONTENT_MANAGEMENT.path,
        loadChildren: () =>
          import('../features/content-management/content-management.module').then((m) => m.ContentManagementModule),
      },
      {
        path: CATEGORY.path,
        loadChildren: () =>
          import('../features/category-management/category-management.module').then((m) => m.CategoryManagementModule
          ),
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
