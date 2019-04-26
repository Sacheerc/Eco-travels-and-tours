import { TestBed } from '@angular/core/testing';

import { TourPackageModelService } from './tour-package-model.service';

describe('TourPackageModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TourPackageModelService = TestBed.get(TourPackageModelService);
    expect(service).toBeTruthy();
  });
});
