import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberOfTheDayComponent } from './view/member-of-the-day.component';
import { MEMBER_OF_THE_DAY_LIST , ADD_MEMBER_OF_THE_DAY, MEMBER_OF_THE_DAY_DETAILS } from 'src/app/constant/routes';

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

    // {
    //   path: `${MEMBER_OF_THE_DAY_DETAILS.path}/details`,
    //   resolve : {
    //     dailyData : DailyUnicornHumourServiceResolve
    //   },
    //   loadChildren: () => import('./pages/daily-unicorm-humour-details/daily-unicorm-humour-details.module')
    //   .then( (m) => m.DailyUnicormHumourDetailsModule
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
