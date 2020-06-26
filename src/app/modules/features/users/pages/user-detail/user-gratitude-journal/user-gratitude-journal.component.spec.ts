import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGratitudeJournalComponent } from './user-gratitude-journal.component';

describe('UserGratitudeJournalComponent', () => {
  let component: UserGratitudeJournalComponent;
  let fixture: ComponentFixture<UserGratitudeJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGratitudeJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGratitudeJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
