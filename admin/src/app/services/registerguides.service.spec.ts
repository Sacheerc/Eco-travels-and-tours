import { TestBed } from '@angular/core/testing';

import { RegisterguidesService } from './registerguides.service';

describe('RegisterguidesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterguidesService = TestBed.get(RegisterguidesService);
    expect(service).toBeTruthy();
  });
});
