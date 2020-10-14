import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CATEGORY_LIST } from 'src/app/constant/routes';
import { EventCategoryListingComponent } from './pages/event-category-listing/view/event-category-listing.component';
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
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventCategoryRoutingModule { }
