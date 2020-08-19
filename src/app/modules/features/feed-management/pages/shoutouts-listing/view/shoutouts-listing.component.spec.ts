import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutoutsListingComponent } from './shoutouts-listing.component';

describe('ShoutoutsListingComponent', () => {
  let component: ShoutoutsListingComponent;
  let fixture: ComponentFixture<ShoutoutsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoutoutsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutoutsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
