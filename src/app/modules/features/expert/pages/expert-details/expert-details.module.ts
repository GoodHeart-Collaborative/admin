import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertDetailsComponent } from './view/expert-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ExpertBasicDetailsModule } from './pages/expert-basic-details/expert-basic-details.module';
import { AddExpertContentModule } from '../add-expert-content/add-expert-content.module';
import { DetailsComponent } from './details/details.component';
import { ExpertDetailsListingModule } from './pages/expert-details-listing/expert-details-listing.module';
import { ExpertDetailsServiceResolve } from './service/expert-details.service';


const routes: Routes = [
  {
    path: '', component: DetailsComponent, children: [
      {path: '', redirectTo: 'details', pathMatch: 'full'},
      { path: 'details', component: ExpertDetailsComponent },
      {
        path: 'add-content',
      loadChildren: () => import('../add-expert-content/add-expert-content.module')
          .then((m) => m.AddExpertContentModule
          )
        } ,
      {path: ':id/edit',
      resolve : {
        expertData : ExpertDetailsServiceResolve
      },
      loadChildren: () => import('../add-expert-content/add-expert-content.module')
          .then((m) => m.AddExpertContentModule
          ),
      },
      {path: 'post',
      resolve : {
        expertData : ExpertDetailsServiceResolve
      },
      loadChildren: () => import('../expert-details/pages/expert-post-details/expert-post-details.module')
          .then((m) => m.ExpertPostDetailsModule
          ),
      }
    ]
  },


];
@NgModule({
  declarations: [ExpertDetailsComponent, DetailsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    AddExpertContentModule,
    ExpertBasicDetailsModule,
    ExpertDetailsListingModule
  ],
  providers: [ExpertDetailsServiceResolve]
})
export class ExpertDetailsModule { }
