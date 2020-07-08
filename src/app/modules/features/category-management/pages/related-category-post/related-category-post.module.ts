import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedCategoryPostComponent } from './view/related-category-post.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CategoryManagementService } from '../../service/category-management.service';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { MatIconModule } from '@angular/material';
import { CategoryManagementDetailsComponent } from '../category-management-details/view/category-management-details.component';
import { CategoryManagementDetailsModule } from '../category-management-details/category-management-details.module';


const routes: Routes = [
  // {
  //   path: '',
  //  component: RelatedCategoryPostComponent,
  // children: [
    // {
    //   path: '',
    //   redirectTo: CATEGORY_LIST.path,
    //   pathMatch: 'full',
    // },
    {path: '' , pathMatch: 'full', component: RelatedCategoryPostComponent},
    {path: ':id', component: CategoryManagementDetailsComponent}
//   ]
// }

];

@NgModule({
  declarations: [RelatedCategoryPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    MatIconModule,
    CategoryManagementDetailsModule
  ],
  providers: [CategoryManagementService]
})
export class RelatedCategoryPostModule { }
