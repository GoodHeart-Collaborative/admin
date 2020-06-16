import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD } from '../../constant/routes';

const accountRoutes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            { path: '', redirectTo: LOGIN.path, pathMatch: 'full' },
            {
                path: LOGIN.path,
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
            },
            {
                path: FORGOT_PASSWORD.path,
                loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
            },
            {
                path: `${RESET_PASSWORD.path}/:token`,
                loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            accountRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []

})

export class AuthRouting {

}
