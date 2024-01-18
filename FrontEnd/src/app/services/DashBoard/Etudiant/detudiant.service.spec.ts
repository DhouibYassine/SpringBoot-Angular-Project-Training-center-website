import { TestBed } from '@angular/core/testing';

import { DEtudiantService } from './detudiant.service';

describe('EtudiantService', () => {
  let service: DEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
