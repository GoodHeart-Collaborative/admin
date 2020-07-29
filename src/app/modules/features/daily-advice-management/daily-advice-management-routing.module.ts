import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DAILY_ADVICE_LIST , ADD_DAILY_ADVICE, DAILY_ADVICE_DETAILS} from 'src/app/constant/routes';
import { DailyAdviceManagementComponent } from './view/daily-advice-management.component';
import { DailyAdviceManagementServiceResolve } from './service/daily-advice-management.service';

const routes: Routes = [
  {
    path: '',
  component: DailyAdviceManagementComponent,
  children: [
    {
      path: '',
      redirectTo: DAILY_ADVICE_LIST.path,
      pathMatch: 'full',
    },
    {
      path: DAILY_ADVICE_LIST.path,
      loadChildren: () => import('./pages/daily-advice-listing/daily-advice-listing.module')
      .then( (m) => m.DailyAdviceListingModule
      ),
    },
    {
      path: ADD_DAILY_ADVICE.path,
      loadChildren: () => import('./pages/add-daily-advice/add-daily-advice.module')
      .then( (m) => m.AddDailyAdviceModule
      ),
    },
    {
      path: 'edit/:id',
      resolve : {
        dailyData : DailyAdviceManagementServiceResolve
      },
      loadChildren: () => import('./pages/add-daily-advice/add-daily-advice.module')
      .then( (m) => m.AddDailyAdviceModule
      ),
    },
    {
      path: `${DAILY_ADVICE_DETAILS.path}/details`,
      resolve : {
        dailyData : DailyAdviceManagementServiceResolve
      },
      loadChildren: () => import('./pages/daily-advice-details/daily-advice-details.module')
      .then( (m) => m.DailyAdviceDetailsModule
      ),
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyAdviceManagementRoutingModule { }