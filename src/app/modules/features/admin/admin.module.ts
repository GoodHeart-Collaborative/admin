import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing';
import { AdminComponent } from './admin.component';
import { ChangePasswordModule } from './change-password/change-password.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    ChangePasswordModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
