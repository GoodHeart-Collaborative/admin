import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleManagementComponent } from './article-management.component';
import { ARTICLES_LIST, ADD_ARTICLES, ARTICLES_DETAILS } from 'src/app/constant/routes';
import { ArticleManagementServiceResolve } from './service/article-management.service';


const routes: Routes = [
  {
    path: '',
  component: ArticleManagementComponent,
  children: [
    {
      path: '',
      redirectTo: ARTICLES_LIST.path,
      pathMatch: 'full',
    },
    {
      path: ARTICLES_LIST.path,
      loadChildren: () => import('./pages/article-management-listing/article-management-listing.module')
      .then( (m) => m.ArticleManagementListingModule
      ),
    },
    {
      path: ADD_ARTICLES.path,
      loadChildren: () => import('./pages/add-article-management/add-article-management.module')
      .then( (m) => m.AddArticleManagementModule
      ),
   },
    // {
    //   path: 'edit/:id',
    //   resolve : {
    //     dailyData : DailyAdviceManagementServiceResolve
    //   },
    //   loadChildren: () => import('./pages/add-daily-advice/add-daily-advice.module')
    //   .then( (m) => m.AddDailyAdviceModule
    //   ),
    // },
    {
      path: `${ARTICLES_DETAILS.path}/details`,
      resolve : {
        dailyData : ArticleManagementServiceResolve
      },
      loadChildren: () => import('./pages/article-management-details/article-management-details.module')
      .then( (m) => m.ArticleManagementDetailsModule
      ),
    },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleManagementRoutingModule { }
