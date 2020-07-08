import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInspirationListingComponent } from './daily-inspiration-listing.component';

describe('DailyInspirationListingComponent', () => {
  let component: DailyInspirationListingComponent;
  let fixture: ComponentFixture<DailyInspirationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyInspirationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyInspirationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
