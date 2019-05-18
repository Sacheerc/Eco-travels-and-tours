import { TestBed } from '@angular/core/testing';

import { SendMailService } from './send-mail.service';

describe('SendMailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendMailService = TestBed.get(SendMailService);
    expect(service).toBeTruthy();
  });
});
