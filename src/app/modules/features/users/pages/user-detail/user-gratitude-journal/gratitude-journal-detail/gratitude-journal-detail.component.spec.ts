import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudeJournalDetailComponent } from './gratitude-journal-detail.component';

describe('GratitudeJournalDetailComponent', () => {
  let component: GratitudeJournalDetailComponent;
  let fixture: ComponentFixture<GratitudeJournalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeJournalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudeJournalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
