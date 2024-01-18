import { TestBed } from '@angular/core/testing';

import { CourcesService } from './cources.service';

describe('CourcesService', () => {
  let service: CourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
