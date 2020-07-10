import { TestBed } from '@angular/core/testing';

import { MemberOfTheDayService } from './member-of-the-day.service';

describe('MemberOfTheDayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberOfTheDayService = TestBed.get(MemberOfTheDayService);
    expect(service).toBeTruthy();
  });
});
