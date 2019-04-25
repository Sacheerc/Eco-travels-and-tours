import { TestBed } from '@angular/core/testing';

import { TourPackagesService } from './tour-packages.service';

describe('TourPackagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TourPackagesService = TestBed.get(TourPackagesService);
    expect(service).toBeTruthy();
  });
});
