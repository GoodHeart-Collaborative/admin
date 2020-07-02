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
const routes: Routes = [
  { path: '', component:ChangePasswordComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule,
    MatDialogModule
  ],
  declarations: [ChangePasswordComponent],
  exports: [ChangePasswordComponent],
  entryComponents: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
