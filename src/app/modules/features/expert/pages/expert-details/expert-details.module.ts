import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertDetailsComponent } from './view/expert-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ExpertBasicDetailsModule } from './pages/expert-basic-details/expert-basic-details.module';
import { AddExpertContentModule } from '../add-expert-content/add-expert-content.module';
import { AddExpertContentComponent } from '../add-expert-content/view/add-expert-content.component';
import { DetailsComponent } from './details/details.component';
import { ExpertImageModule } from './pages/expert-image/expert-image.module';
import { ExpertVideoModule } from './pages/expert-video/expert-video.module';
import { ExpertArticleModule } from './pages/expert-article/expert-article.module';
import { ExpertVoiceNotesModule } from './pages/expert-voice-notes/expert-voice-notes.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: ExpertDetailsComponent
//   },

// ];

const routes: Routes = [
  {
    path: '', component: DetailsComponent, children: [
      {path: '', redirectTo: 'details', pathMatch: 'full'},
      { path: 'details', component: ExpertDetailsComponent },
      {path: 'add', component: AddExpertContentComponent }
    ]
  },


];
@NgModule({
  declarations: [ExpertDetailsComponent, DetailsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    AddExpertContentModule,
    ExpertBasicDetailsModule,
    ExpertImageModule,
    ExpertVideoModule,
    ExpertArticleModule,
    ExpertVoiceNotesModule
  ]
})
export class ExpertDetailsModule { }
