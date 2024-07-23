import { TestBed } from '@angular/core/testing';

import { AgePyramidTotalService } from './age-pyramid-total.service';

describe('AgePyramidTotalService', () => {
  let service: AgePyramidTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgePyramidTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
