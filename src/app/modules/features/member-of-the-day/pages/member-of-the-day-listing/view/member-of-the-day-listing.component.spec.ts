import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberOfTheDayListingComponent } from './member-of-the-day-listing.component';

describe('MemberOfTheDayListingComponent', () => {
  let component: MemberOfTheDayListingComponent;
  let fixture: ComponentFixture<MemberOfTheDayListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberOfTheDayListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberOfTheDayListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
