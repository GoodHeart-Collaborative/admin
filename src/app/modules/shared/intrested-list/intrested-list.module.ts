import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntrestedListComponent } from './view/intrested-list.component';



@NgModule({
  declarations: [IntrestedListComponent],
  imports: [
    CommonModule
  ],
  entryComponents:[IntrestedListComponent]
})
export class IntrestedListModule { }
