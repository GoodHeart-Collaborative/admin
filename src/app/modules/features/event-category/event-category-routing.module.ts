import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CATEGORY_LIST, ADD_EVENT_CATEGORY } from 'src/app/constant/routes';
import { EventCategoryComponent } from './view/event-category.component';


const routes: Routes = [
  {
    path: '',
  component: EventCategoryComponent,
  children: [
    {
      path: '',
      redirectTo: CATEGORY_LIST.path,
      pathMatch: 'full',
    },
    {
      path: CATEGORY_LIST.path,
      loadChildren: () => import('./pages/event-category-listing/event-category-listing.module')
      .then( (m) => m.EventCategoryListingModule
      ),
    },
    {
      path: ADD_EVENT_CATEGORY.path,
      loadChildren: () => import('./pages/add-event-category/add-event-category.module')
      .then( (m) => m.AddEventCategoryModule
      ),
    },
    {
      path: 'edit/:id',
      loadChildren: () => import('./pages/add-event-category/add-event-category.module')
      .then( (m) => m.AddEventCategoryModule
      ),
    },
    {
      path: ':id',
      loadChildren: () => import('./pages/event-related-category-post/event-related-category-post.module')
      .then( (m) => m.EventRelatedCategoryPostModule
      ),
    },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventCategoryRoutingModule { }
