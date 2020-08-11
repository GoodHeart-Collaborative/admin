import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntrestedListComponent } from './view/intrested-list.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';



@NgModule({
  declarations: [IntrestedListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    CustomImageModule,
    TimePipeModule
  ],
  entryComponents:[IntrestedListComponent]
})
export class IntrestedListModule { }
