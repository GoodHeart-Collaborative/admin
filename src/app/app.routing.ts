import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountGuard } from './guards/account/account.guard';
import { HomeGuard } from './guards/home/home.guard';
import { ADMIN, ACCOUNT , CONTENT, SETTINGS , LINK_EXPIRED} from './constant/routes';
import { LinkExpiredComponent } from './modules/shared/link-expired/link-expired.component';


const appRoutes: Routes = [
  { path: '', redirectTo: ADMIN.path, pathMatch: 'full' },
  {
    path: ACCOUNT.path,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canLoad: [AccountGuard],
    canActivate: [AccountGuard],
  },
  {
    path: ADMIN.path,
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    canLoad: [HomeGuard],
    canActivate: [HomeGuard],
  },
  {
    path: SETTINGS.path,
    loadChildren: () =>
      import('./modules/features/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [HomeGuard],
    canActivate: [HomeGuard],
  },
  {
    path: CONTENT.path,
    loadChildren: () =>
      import('./modules/shared/content/content.module').then(
        (m) => m.ContentModule
      ),
  },
  { path: LINK_EXPIRED.path , component: LinkExpiredComponent },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
