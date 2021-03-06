import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule, MatExpansionModule } from '@angular/material';
import { CustomImageModule } from '../../pipes/custom-image/custom-image.module';
import {BreadcrumbModule} from 'src/app/modules/shared/components/breadcrumb/breadcrumb.module'
import { ChangePasswordModule } from '../features/admin/change-password/change-password.module';
import { AdminProfileModule } from '../features/admin/admin-profile/admin-profile.module';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    SharedModule,
    CustomImageModule,
    BreadcrumbModule,
    ChangePasswordModule,
    AdminProfileModule,
    CustomImageModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ],
})
export class LayoutModule { }
