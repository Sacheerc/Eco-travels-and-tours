import { TestBed } from '@angular/core/testing';

import { PopupModalService } from './popup-modal.service';

describe('PopupModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopupModalService = TestBed.get(PopupModalService);
    expect(service).toBeTruthy();
  });
});
