import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAdviceListingComponent } from './daily-advice-listing.component';

describe('DailyAdviceListingComponent', () => {
  let component: DailyAdviceListingComponent;
  let fixture: ComponentFixture<DailyAdviceListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAdviceListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAdviceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
