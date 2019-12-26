import { TestBed } from '@angular/core/testing';

import { EventregistrationService } from './eventregistration.service';

describe('EventregistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventregistrationService = TestBed.get(EventregistrationService);
    expect(service).toBeTruthy();
  });
});
