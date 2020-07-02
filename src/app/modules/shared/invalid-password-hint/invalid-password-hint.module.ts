import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidPasswordHintComponent } from './view/invalid-password-hint.component';
import { MatIconModule, MatMenuModule } from '@angular/material';



@NgModule({
  declarations: [InvalidPasswordHintComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [InvalidPasswordHintComponent]
})
export class InvalidPasswordHintModule { }
