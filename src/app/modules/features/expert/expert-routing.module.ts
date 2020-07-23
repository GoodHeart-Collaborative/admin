import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpertComponent } from './expert.component';
import {EXPERT_LIST, ADD_EXPERT , EXPERT_DETAILS} from 'src/app/constant/routes';

const routes: Routes = [
    {
      path: '',
    component: ExpertComponent,
    children: [
      {
        path: '',
        // redirectTo: ARTICLES_LIST.path,
        pathMatch: 'full',
      },
      {
        path: EXPERT_LIST.path,
        loadChildren: () => import('./pages/expert-listing/expert-listing.module')
        .then( (m) => m.ExpertListingModule
        ),
      },
      {
        path: ADD_EXPERT.path,
        loadChildren: () => import('./pages/add-expert/add-expert.module')
        .then( (m) => m.AddExpertModule
        ),
     },
  //     // {
  //     //   path: 'edit/:id',
  //     //   resolve : {
  //     //     dailyData : DailyAdviceManagementServiceResolve
  //     //   },
  //     //   loadChildren: () => import('./pages/add-daily-advice/add-daily-advice.module')
  //     //   .then( (m) => m.AddDailyAdviceModule
  //     //   ),
  //     // },
      {
        path: `${EXPERT_DETAILS.path}/details`,
        // resolve : {
        //   dailyData : ArticleManagementServiceResolve
        // },
        loadChildren: () => import('./pages/expert-details/expert-details.module')
        .then( (m) => m.ExpertDetailsModule
        ),
      },
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertRoutingModule { }
