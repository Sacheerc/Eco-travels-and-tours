import { TestBed } from '@angular/core/testing';

import { PackageServiceService } from './package-service.service';

describe('PackageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageServiceService = TestBed.get(PackageServiceService);
    expect(service).toBeTruthy();
  });
});
