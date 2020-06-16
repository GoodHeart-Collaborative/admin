import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AdminProfileComponent } from './component/admin-profile.component';
import { CustomImageModule } from '../../../../pipes/custom-image/custom-image.module';
const routes: Routes = [
  { path: '', component:AdminProfileComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    CustomImageModule
  ],
  declarations: [ AdminProfileComponent ]
})
export class AdminProfileModule { }
