import { TestBed } from '@angular/core/testing';

import { SendEmailsService } from './send-emails.service';

describe('SendEmailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendEmailsService = TestBed.get(SendEmailsService);
    expect(service).toBeTruthy();
  });
});
