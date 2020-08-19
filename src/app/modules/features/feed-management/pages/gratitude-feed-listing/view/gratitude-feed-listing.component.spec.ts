import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudeFeedListingComponent } from './gratitude-feed-listing.component';

describe('GratitudeFeedListingComponent', () => {
  let component: GratitudeFeedListingComponent;
  let fixture: ComponentFixture<GratitudeFeedListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeFeedListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudeFeedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
