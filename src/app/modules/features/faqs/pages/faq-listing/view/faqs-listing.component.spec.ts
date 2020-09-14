import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsListingComponent } from './faqs-listing.component';

describe('FaqsListingComponent', () => {
  let component: FaqsListingComponent;
  let fixture: ComponentFixture<FaqsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
