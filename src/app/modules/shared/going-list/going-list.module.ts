import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoingListComponent } from './view/going-list.component';
import { MatDialogModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { TimePipeModule } from 'src/app/pipes/time-pipe/time-pipe.module';
import { CustomImageModule } from 'src/app/pipes/custom-image/custom-image.module';



@NgModule({
  declarations: [GoingListComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    TimePipeModule,
    CustomImageModule
  ],
  entryComponents: [GoingListComponent]
})
export class GoingListModule { }
