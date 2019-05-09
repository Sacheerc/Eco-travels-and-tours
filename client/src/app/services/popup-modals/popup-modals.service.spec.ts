import { TestBed } from '@angular/core/testing';

import { PopupModalsService } from './popup-modals.service';

describe('PopupModalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopupModalsService = TestBed.get(PopupModalsService);
    expect(service).toBeTruthy();
  });
});
