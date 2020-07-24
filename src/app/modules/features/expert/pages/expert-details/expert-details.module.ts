import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertDetailsComponent } from './view/expert-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ExpertBasicDetailsModule } from './pages/expert-basic-details/expert-basic-details.module';
import { ADD_EXPERT_CONTENT } from 'src/app/constant/routes';

// const routes: Routes = [
//   {
//     path: '',
//     component: ExpertDetailsComponent
//   },

// ];

const routes: Routes = [
  {
    path: '', redirectTo: 'details', pathMatch: 'full'

  },
  { path: 'details', component: ExpertDetailsComponent },

  // {
  //   path: 'add',
  //   loadChildren: () => import('../add-expert-content/add-expert-content.module')
  //     .then((m) => m.AddExpertContentModule
  //     ),
  // },

];
@NgModule({
  declarations: [ExpertDetailsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ExpertBasicDetailsModule
  ]
})
export class ExpertDetailsModule { }
