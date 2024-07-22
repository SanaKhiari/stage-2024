import { TestBed } from '@angular/core/testing';

import { Stat1Service } from './stat1.service';

describe('Stat1Service', () => {
  let service: Stat1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Stat1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
