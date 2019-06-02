import { TestBed } from '@angular/core/testing';

import { GetUserService } from './get-user.service';

describe('GetUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUserService = TestBed.get(GetUserService);
    expect(service).toBeTruthy();
  });
});
