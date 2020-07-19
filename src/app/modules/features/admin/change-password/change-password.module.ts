import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChangePasswordComponent } from './component/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from '../../../../pipes/validation-error/validation-error-pipe.module';
import { MatDialogModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { InvalidPasswordHintModule } from 'src/app/modules/shared/invalid-password-hint/invalid-password-hint.module';
import { ChangePasswordService } from './service/change-password.service';
import { WhiteSpaceModule } from 'src/app/modules/shared/white-space/white-space.module';
const routes: Routes = [
  { path: '', component: ChangePasswordComponent },
];

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    InvalidPasswordHintModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    WhiteSpaceModule
  ],
  providers: [ChangePasswordService],
  exports: [ChangePasswordComponent],
  entryComponents: [ChangePasswordComponent],
})
export class ChangePasswordModule { }
