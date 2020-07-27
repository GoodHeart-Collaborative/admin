import { TestBed } from '@angular/core/testing';

import { ExpertDetailsService } from './expert-details.service';

describe('ExpertDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpertDetailsService = TestBed.get(ExpertDetailsService);
    expect(service).toBeTruthy();
  });
});
