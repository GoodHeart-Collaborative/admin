import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryManagementComponent } from './view/category-management.component';
import { CATEGORY_LIST } from 'src/app/constant/routes';

const routes: Routes = [
  {
    path: '',
  component: CategoryManagementComponent,
  children: [
    {
      path: '',
      redirectTo: CATEGORY_LIST.path,
      pathMatch: 'full',
    },
    {
      path: CATEGORY_LIST.path,
      // tslint:disable-next-line: max-line-length
      loadChildren: () => import('./pages/category-management-listing/category-management-listing.module').then( (m) => m.CategoryManagementListingModule
      ),
    },
  ]
}
];

@NgModule({
  declarations: [CategoryManagementComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoryManagementRoutingModule { }
