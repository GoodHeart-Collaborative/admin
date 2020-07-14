import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberOfTheDayDetailsComponent } from './member-of-the-day-details.component';

describe('MemberOfTheDayDetailsComponent', () => {
  let component: MemberOfTheDayDetailsComponent;
  let fixture: ComponentFixture<MemberOfTheDayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberOfTheDayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberOfTheDayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
