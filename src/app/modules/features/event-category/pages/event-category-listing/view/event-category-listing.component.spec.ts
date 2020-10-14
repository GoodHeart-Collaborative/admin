import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCategoryListingComponent } from './event-category-listing.component';

describe('EventCategoryListingComponent', () => {
  let component: EventCategoryListingComponent;
  let fixture: ComponentFixture<EventCategoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCategoryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCategoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
