import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './view/event.component';
import { ADD_EVENTS , EVENTS_LIST, EVENTS_DETAIL} from 'src/app/constant/routes';
import { EventServiceResolve } from './service/event.service';


const routes: Routes = [
  {
    path: '',
  component: EventComponent,
  children: [
    {
      path: '',
      redirectTo: EVENTS_LIST.path,
      pathMatch: 'full',
    },
    {
      path: EVENTS_LIST.path,
      loadChildren: () => import('./pages/event-listing/event-listing.module')
      .then( (m) => m.EventListingModule
      ),
    },
    {
      path: ADD_EVENTS.path,
      loadChildren: () => import('./pages/add-event/add-event.module')
      .then( (m) => m.AddEventModule
      ),
    },
    {
      path: 'edit/:id',
      resolve : {
        eventDetails : EventServiceResolve
      },
      loadChildren: () => import('./pages/add-event/add-event.module')
      .then( (m) => m.AddEventModule
      ),
     },
    {
      path: `${EVENTS_DETAIL.path}/details`,
      resolve : {
        eventDetails : EventServiceResolve
      },
      loadChildren: () => import('./pages/event-details/event-details.module')
      .then( (m) => m.EventDetailsModule
      ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
