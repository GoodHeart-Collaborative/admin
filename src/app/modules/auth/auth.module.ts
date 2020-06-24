import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRouting } from './auth.routing';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        AuthRouting,
        MatButtonModule,
        MatButtonToggleModule,
    ],
    declarations: [AuthComponent]
})
export class AuthModule {
}
