import { TestBed } from '@angular/core/testing';

import { DFormateurService } from './dformateur.service';

describe('FormateurService', () => {
  let service: DFormateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DFormateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
