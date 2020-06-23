import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './view/breadcrumb.component';
import { BreadcrumbService } from './service/breadcrumb.service';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  providers: [BreadcrumbService],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
