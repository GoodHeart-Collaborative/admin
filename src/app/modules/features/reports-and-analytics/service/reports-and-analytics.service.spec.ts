import { TestBed } from '@angular/core/testing';

import { ReportsAndAnalyticsService } from './reports-and-analytics.service';

describe('ReportsAndAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportsAndAnalyticsService = TestBed.get(ReportsAndAnalyticsService);
    expect(service).toBeTruthy();
  });
});
