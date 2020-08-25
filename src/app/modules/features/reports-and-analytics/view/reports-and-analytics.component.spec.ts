import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAndAnalyticsComponent } from './reports-and-analytics.component';

describe('ReportsAndAnalyticsComponent', () => {
  let component: ReportsAndAnalyticsComponent;
  let fixture: ComponentFixture<ReportsAndAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsAndAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsAndAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
