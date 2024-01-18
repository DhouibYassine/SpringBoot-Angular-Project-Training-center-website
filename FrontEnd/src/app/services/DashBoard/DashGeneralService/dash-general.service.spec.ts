import { TestBed } from '@angular/core/testing';

import { DashGeneralService } from './dash-general.service';

describe('DashGeneralService', () => {
  let service: DashGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
