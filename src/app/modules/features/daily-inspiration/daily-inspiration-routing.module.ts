import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyInspirationComponent } from './view/daily-inspiration.component';
import {DAILY_INSPIRATION_LIST, ADD_DAILY_INSPIRATION , DAILY_INSPIRATION_DETAILS} from 'src/app/constant/routes';

const routes: Routes = [
  {
    path: '',
  component: DailyInspirationComponent,
  children: [
    {
      path: '',
      redirectTo: DAILY_INSPIRATION_LIST.path,
      pathMatch: 'full',
    },
    {
      path: DAILY_INSPIRATION_LIST.path,
      loadChildren: () => import('./pages/daily-inspiration-listing/daily-inspiration-listing.module')
      .then( (m) => m.DailyInspirationListingModule
      ),
    },
    {
      path: `${ADD_DAILY_INSPIRATION.path}`,
      loadChildren: () => import('./pages/add-daily-inspiration/add-daily-inspiration.module')
      .then( (m) => m.AddDailyInspirationModule
      ),
    },
    {
      path:`${DAILY_INSPIRATION_DETAILS.path}`,
      loadChildren: () => import('./pages/daily-inspiration-details/daily-inspiration-details.module')
      .then( (m) => m.DailyInspirationDetailsModule
      ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyInspirationRoutingModule { }
