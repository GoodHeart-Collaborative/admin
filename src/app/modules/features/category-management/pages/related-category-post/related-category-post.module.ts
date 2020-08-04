import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedCategoryPostComponent } from './view/related-category-post.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CategoryManagementService } from '../../service/category-management.service';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { MatIconModule } from '@angular/material';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';
import { ListingFilterComponent } from './component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';


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
    {path: '' , component: RelatedCategoryPostComponent},

//   ]
// }

];

@NgModule({
  declarations: [RelatedCategoryPostComponent, ListingFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CustomDatePipeModule,
    MatIconModule,
    LikeActionModule,
    CommentsModule,
    DateFilterModule
  ],
  providers: [CategoryManagementService],
  entryComponents: [ListingFilterComponent]
})
export class RelatedCategoryPostModule { }
