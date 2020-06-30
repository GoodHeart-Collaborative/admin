import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ADMIN_PROFILE, EDIT_PROFILE, CHANGE_PASSWORD } from '../../../constant/routes';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            {
                path: '',
                redirectTo: ADMIN_PROFILE.path,
                pathMatch: 'full',
            },
            {
                path: ADMIN_PROFILE.path,
                loadChildren: () => import('./admin-profile/admin-profile.module').then(m => m.AdminProfileModule)
            },
            {
                path: EDIT_PROFILE.path,
                loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfileModule)
            },
            {
                path: CHANGE_PASSWORD.path,
                loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule)
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AdminRouting {

}

