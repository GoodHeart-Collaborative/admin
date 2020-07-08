import { TestBed } from '@angular/core/testing';

import { DailyInspirationService } from './daily-inspiration.service';

describe('DailyInspirationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyInspirationService = TestBed.get(DailyInspirationService);
    expect(service).toBeTruthy();
  });
});
