import { TestBed } from '@angular/core/testing';

import { PopulationEvolutionService } from './population-evolution.service';

describe('PopulationEvolutionService', () => {
  let service: PopulationEvolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopulationEvolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
