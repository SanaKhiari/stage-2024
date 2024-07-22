import { TestBed } from '@angular/core/testing';

import { PyramidAgeService } from './pyramid-age.service';

describe('PyramidAgeService', () => {
  let service: PyramidAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PyramidAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
