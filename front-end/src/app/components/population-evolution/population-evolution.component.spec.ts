import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationEvolutionComponent } from './population-evolution.component';

describe('PopulationEvolutionComponent', () => {
  let component: PopulationEvolutionComponent;
  let fixture: ComponentFixture<PopulationEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopulationEvolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
