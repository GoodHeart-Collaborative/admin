import { TestBed } from '@angular/core/testing';

import { DailyUnicornHumourService } from './daily-unicorn-humour.service';

describe('DailyUnicornHumourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyUnicornHumourService = TestBed.get(DailyUnicornHumourService);
    expect(service).toBeTruthy();
  });
});
