import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmBoxComponent } from './view/confirm-box.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { ConfirmBoxService } from './services/confirm-box.service';



@NgModule({
  declarations: [ConfirmBoxComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    ConfirmBoxService
  ],
  entryComponents: [ConfirmBoxComponent]
})
export class ConfirmBoxModule { }
