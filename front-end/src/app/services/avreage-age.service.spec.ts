import { TestBed } from '@angular/core/testing';

import { AvreageAgeService } from './avreage-age.service';

describe('AvreageAgeService', () => {
  let service: AvreageAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvreageAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
