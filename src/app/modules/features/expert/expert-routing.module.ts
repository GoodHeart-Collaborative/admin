import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpertComponent } from './expert.component';
import {EXPERT_LIST, ADD_EXPERT , EXPERT_DETAILS, ADD_EXPERT_CONTENT} from 'src/app/constant/routes';

const routes: Routes = [
    {
      path: '',
    component: ExpertComponent,
    children: [
     
      {
        path: EXPERT_LIST.path,
        loadChildren: () => import('./pages/expert-listing/expert-listing.module')
        .then( (m) => m.ExpertListingModule
        ),
      },
    
    //   {
    //     path: ADD_EXPERT.path,
    //     loadChildren: () => import('./pages/add-expert/add-expert.module')
    //     .then( (m) => m.AddExpertModule
    //     ),
    //  },
  //     // {
  //     //   path: 'edit/:id',
  //     //   resolve : {
  //     //     dailyData : Daily AdviceManagementServiceResolve
  //     //   },
  //     //   loadChildren: () => import('./pages/add-daily-advice/add-daily-advice.module')
  //     //   .then( (m) => m.AddDailyAdviceModule
  //     //   ),
  //     // },
      {
        path: `${EXPERT_DETAILS.path}`,
        
        loadChildren: () => import('./pages/expert-details/expert-details.module')
        .then( (m) => m.ExpertDetailsModule
        ),

      },
      {
        path: ':id/add',
        loadChildren: () => import('./pages/add-expert-content/add-expert-content.module')
        .then( (m) => m.AddExpertContentModule
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
