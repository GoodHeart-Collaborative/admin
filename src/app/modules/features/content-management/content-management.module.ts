import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {ContentManagementComponent} from './component/content-management/content-management.component';
import {ContentManagementRouting} from './content-management.routing';
import {QuillModule} from 'ngx-quill';
import { QuillEditorComponent } from './component/quill-editor/quill-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PopupService } from '../../shared/popup';
import { MatButtonModule } from '@angular/material';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error-pipe.module';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
        MatTooltipModule,
        MatListModule,
        MatTabsModule,
        ContentManagementRouting,
        MatButtonModule,
        QuillModule.forRoot(),
        ReactiveFormsModule,
        ValidationErrorPipeModule
    ],
    declarations: [ContentManagementComponent, QuillEditorComponent],
    providers: [PopupService]
})
export class ContentManagementModule {
}
