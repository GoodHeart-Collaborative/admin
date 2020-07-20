import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberOfTheDayComponent } from './view/member-of-the-day.component';
import { MEMBER_OF_THE_DAY_LIST , ADD_MEMBER_OF_THE_DAY } from 'src/app/constant/routes';
import { MemberOfTheDayServiceResolve } from './service/member-of-the-day.service';

const routes: Routes = [
  {
    path: '',
  component: MemberOfTheDayComponent,
  children: [
    {
      path: '',
      redirectTo: MEMBER_OF_THE_DAY_LIST.path,
      pathMatch: 'full',
    },
    {
      path: MEMBER_OF_THE_DAY_LIST.path,
      loadChildren: () => import('./pages/member-of-the-day-listing/member-of-the-day-listing.module')
      .then( (m) => m.MemberOfTheDayListingModule
      ),
    },

    {
      path: ADD_MEMBER_OF_THE_DAY.path,
      loadChildren: () => import('./pages/add-member-of-the-day/add-member-of-the-day.module')
      .then( (m) => m.AddMemberOfTheDayModule
      ),
    },

    // {
    //   path: `${MEMBER_OF_THE_DAY_DETAILS.path}/details`,
    //   resolve : {
    //     dailyData : MemberOfTheDayServiceResolve
    //   },
    //   loadChildren: () => import('./pages/member-of-the-day-details/member-of-the-day-details.module')
    //   .then( (m) => m.MemberOfTheDayDetailsModule
    //   ),
    // },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberOfTheDayRoutingModule { }
