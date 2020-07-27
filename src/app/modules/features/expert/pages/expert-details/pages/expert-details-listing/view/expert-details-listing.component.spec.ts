import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDetailsListingComponent } from './expert-details-listing.component';

describe('ExpertDetailsListingComponent', () => {
  let component: ExpertDetailsListingComponent;
  let fixture: ComponentFixture<ExpertDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
