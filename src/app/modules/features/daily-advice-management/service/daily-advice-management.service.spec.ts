import { TestBed } from '@angular/core/testing';

import { DailyAdviceManagementService } from './daily-advice-management.service';

describe('DailyAdviceManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyAdviceManagementService = TestBed.get(DailyAdviceManagementService);
    expect(service).toBeTruthy();
  });
});
