import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryManagementComponent } from './view/category-management.component';
import { CATEGORY_LIST, CATEGORY, ADD_CATEGORY , } from 'src/app/constant/routes';
import { CategoryManagementServiceResolve } from './service/category-management.service';


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
      loadChildren: () => import('./pages/category-management-listing/category-management-listing.module')
      .then( (m) => m.CategoryManagementListingModule
      ),
    },
    {
      path: ADD_CATEGORY.path,
      loadChildren: () => import('./pages/add-category-management/add-category-management.module')
      .then( (m) => m.AddCategoryManagementModule
      ),
    },
    {
      path: 'edit/:id',
      resolve: {
        categoryDetails: CategoryManagementServiceResolve
      },
      loadChildren: () => import('./pages/add-category-management/add-category-management.module')
      .then( (m) => m.AddCategoryManagementModule
      ),
    },
    {
      path: ':id',
      loadChildren: () => import('./pages/related-category-post/related-category-post.module')
      .then( (m) => m.RelatedCategoryPostModule
      ),
    },
    {
      path: ':id/:id/details',
      loadChildren: () => import('./pages/category-management-details/category-management-details.module')
      .then( (m) => m.CategoryManagementDetailsModule
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
