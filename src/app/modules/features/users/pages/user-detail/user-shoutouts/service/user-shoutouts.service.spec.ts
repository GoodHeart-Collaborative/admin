import { TestBed } from '@angular/core/testing';

import { UserShoutoutsService } from './user-shoutouts.service';

describe('UserShoutoutsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserShoutoutsService = TestBed.get(UserShoutoutsService);
    expect(service).toBeTruthy();
  });
});
