import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AdminProfileComponent } from './component/admin-profile.component';
import { CustomImageModule } from '../../../../pipes/custom-image/custom-image.module';
import { ChangePasswordModule } from '../change-password/change-password.module';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { ChangePasswordService } from '../change-password/service/change-password.service';
import { ConfirmBoxModule } from 'src/app/modules/shared/confirm-box';
import { EditProfileModule } from '../edit-profile/edit-profile.module';
import { ViewFullImageModule } from 'src/app/modules/shared/view-full-image/view-full-image.module';

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
    MatIconModule,
    ConfirmBoxModule,
    EditProfileModule,
    ViewFullImageModule
  ],
  entryComponents: [AdminProfileComponent],
})
export class AdminProfileModule { }
