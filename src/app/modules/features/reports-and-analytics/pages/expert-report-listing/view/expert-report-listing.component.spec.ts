import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertReportListingComponent } from './expert-report-listing.component';

describe('ExpertReportListingComponent', () => {
  let component: ExpertReportListingComponent;
  let fixture: ComponentFixture<ExpertReportListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertReportListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertReportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
