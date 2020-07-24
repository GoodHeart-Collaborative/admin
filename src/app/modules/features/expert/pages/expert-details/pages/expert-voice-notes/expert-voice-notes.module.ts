import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertVoiceNotesComponent } from './view/expert-voice-notes.component';



@NgModule({
  declarations: [ExpertVoiceNotesComponent],
  imports: [
    CommonModule
  ],
  exports: [ExpertVoiceNotesComponent]
})
export class ExpertVoiceNotesModule { }
