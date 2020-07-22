import { TestBed } from '@angular/core/testing';

import { UserGratitudeJournalService } from './user-gratitude-journal.service';

describe('UserGratitudeJournalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserGratitudeJournalService = TestBed.get(UserGratitudeJournalService);
    expect(service).toBeTruthy();
  });
});
