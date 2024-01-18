import { TestBed } from '@angular/core/testing';

import { SEtudiantService } from './setudiant.service';

describe('EtudiantService', () => {
  let service: SEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
