import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyUnicornHumourComponent } from './view/daily-unicorn-humour.component';
import {DAILY_UNICORN_LIST , ADD_DAILY_UNICORN , DAILY_UNICORN_DETAILS} from 'src/app/constant/routes';

const routes: Routes = [
  {
    path: '',
  component: DailyUnicornHumourComponent,
  children: [
    {
      path: '',
      redirectTo: DAILY_UNICORN_LIST.path,
      pathMatch: 'full',
    },
    {
      path: DAILY_UNICORN_LIST.path,
      loadChildren: () => import('./pages/daily-unicorm-humour-listing/daily-unicorm-humour-listing.module')
      .then( (m) => m.DailyUnicormHumourListingModule
      ),
    },
    {
      path: `${ADD_DAILY_UNICORN.path}`,
      loadChildren: () => import('./pages/add-daily-unicorm-humour/add-daily-unicorm-humour.module')
      .then( (m) => m.AddDailyUnicormHumourModule
      ),
    },
    {
      path: 'edit/:id',
      // resolve : {
      //   dailyData : DailyInspirationServiceResolve
      // },
      loadChildren: () => import('./pages/add-daily-unicorm-humour/add-daily-unicorm-humour.module')
      .then( (m) => m.AddDailyUnicormHumourModule
      ),
    },
    {
      path: `${DAILY_UNICORN_DETAILS.path}/details`,
      // resolve : {
      //   dailyData : DailyInspirationServiceResolve
      // },
      loadChildren: () => import('./pages/daily-unicorm-humour-details/daily-unicorm-humour-details.module')
      .then( (m) => m.DailyUnicormHumourDetailsModule
      ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyUnicornHumourRoutingModule { }
