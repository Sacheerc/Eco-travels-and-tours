import { TestBed } from '@angular/core/testing';

import { GetGuidesService } from './get-guides.service';

describe('GetGuidesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetGuidesService = TestBed.get(GetGuidesService);
    expect(service).toBeTruthy();
  });
});
