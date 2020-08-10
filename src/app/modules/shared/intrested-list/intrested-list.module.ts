import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntrestedListComponent } from './view/intrested-list.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [IntrestedListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
  ],
  entryComponents:[IntrestedListComponent]
})
export class IntrestedListModule { }
