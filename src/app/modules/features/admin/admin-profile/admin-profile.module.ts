import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AdminProfileComponent } from './component/admin-profile.component';
import { CustomImageModule } from '../../../../pipes/custom-image/custom-image.module';
import { ChangePasswordModule } from '../change-password/change-password.module';
import { MatDialogModule } from '@angular/material';
import { ChangePasswordService } from '../change-password/service/change-password.service';
import { ConfirmBoxModule } from 'src/app/modules/shared/confirm-box';

const routes: Routes = [
  { path: '', component: AdminProfileComponent }
];

@NgModule({
  declarations: [AdminProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CustomImageModule,
    MatDialogModule,
    ConfirmBoxModule
  ],
})
export class AdminProfileModule { }
