import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertDetailsComponent } from './view/expert-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ExpertBasicDetailsModule } from './pages/expert-basic-details/expert-basic-details.module';


const routes: Routes = [
  {
    path: '',
    component: ExpertDetailsComponent
  }
];
@NgModule({
  declarations: [ExpertDetailsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ExpertBasicDetailsModule
   ]
})
export class ExpertDetailsModule { }
