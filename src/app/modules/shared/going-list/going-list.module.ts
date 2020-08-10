import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoingListComponent } from './view/going-list.component';
import { MatDialogModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [GoingListComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  entryComponents: [GoingListComponent]
})
export class GoingListModule { }
