import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertVideoComponent } from './view/expert-video.component';
import { MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [ExpertVideoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ExpertVideoComponent]
})
export class ExpertVideoModule { }
