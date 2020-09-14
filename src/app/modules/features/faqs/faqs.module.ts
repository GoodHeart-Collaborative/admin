import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQsComponent } from './view/faqs.component';
import { Routes, RouterModule } from '@angular/router';
import { ContentService } from '../../shared/services/content.service';
import { ADD_FAQs, FAQs_LIST } from 'src/app/constant/routes';


const routes: Routes = [
  {
    path: '',
    component: FAQsComponent,
    children: [
      {
        path: '',
        redirectTo: FAQs_LIST.path,
        pathMatch: 'full',
      },
      {
        path: FAQs_LIST.path,
        loadChildren: () => import('./pages/faq-listing/faq-listing.module')
          .then((m) => m.FAQListingModule
          ),
      },

        {
          path: ADD_FAQs.path,
          loadChildren: () => import('./pages/add-faqs/add-faqs.module')
          .then( (m) => m.AddFaqsModule
          ),
       },
        {
           path: 'edit/:id',
          //  resolve : {
          //   expertData : ExpertServiceResolve
          // },
          loadChildren: () => import('./pages/add-faqs/add-faqs.module')
          .then( (m) => m.AddFaqsModule
          )
          },
    ]
  }
];
@NgModule({
  declarations: [FAQsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ContentService],
 
})
export class FaqsModule { }
