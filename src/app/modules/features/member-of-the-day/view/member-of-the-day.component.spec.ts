import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberOfTheDayComponent } from './member-of-the-day.component';

describe('MemberOfTheDayComponent', () => {
  let component: MemberOfTheDayComponent;
  let fixture: ComponentFixture<MemberOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
