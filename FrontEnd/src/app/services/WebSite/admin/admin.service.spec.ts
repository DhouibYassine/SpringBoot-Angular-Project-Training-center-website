import { TestBed } from '@angular/core/testing';

import { ADMINService } from './admin.service';

describe('ADMINService', () => {
  let service: ADMINService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ADMINService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
