import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertVoiceNotesComponent } from './expert-voice-notes.component';

describe('ExpertVoiceNotesComponent', () => {
  let component: ExpertVoiceNotesComponent;
  let fixture: ComponentFixture<ExpertVoiceNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertVoiceNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertVoiceNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
