import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmBoxComponent } from './view/confirm-box.component';
import { MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';
import { ConfirmBoxService } from './services/confirm-box.service';



@NgModule({
  declarations: [ConfirmBoxComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    ConfirmBoxService
  ],
  entryComponents: [ConfirmBoxComponent]
})
export class ConfirmBoxModule { }
