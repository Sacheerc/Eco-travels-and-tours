import { TestBed } from '@angular/core/testing';

import { RateGuideService } from './rate-guide.service';

describe('RateGuideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RateGuideService = TestBed.get(RateGuideService);
    expect(service).toBeTruthy();
  });
});
