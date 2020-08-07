import { TestBed } from '@angular/core/testing';

import { UserEventService } from './user-event.service';

describe('UserEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserEventService = TestBed.get(UserEventService);
    expect(service).toBeTruthy();
  });
});
