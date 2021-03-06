import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedCategoryPostComponent } from './view/related-category-post.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/modules/commonTable/table';
import { CategoryManagementService } from '../../service/category-management.service';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { MatIconModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { LikeActionModule } from 'src/app/modules/shared/like-action/like-action.module';
import { CommentsModule } from 'src/app/modules/shared/comments/comments.module';
import { ListingFilterComponent } from './component/listing-filter.component';
import { DateFilterModule } from 'src/app/modules/layout/layout-shared/date-filter/date-filter.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { ReactiveFormsModule } from '@angular/forms';


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
    DateFilterModule,
    ViewFullImageModule,
    CustomImageModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [CategoryManagementService],
  entryComponents: [ListingFilterComponent]
})
export class RelatedCategoryPostModule { }
