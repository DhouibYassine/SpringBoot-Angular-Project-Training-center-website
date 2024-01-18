import { TestBed } from '@angular/core/testing';

import { SFormateurService } from './sformateur.service';

describe('FormateurService', () => {
  let service: SFormateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SFormateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
