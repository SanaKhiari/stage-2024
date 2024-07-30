import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionMonsuelleParTypeComponent } from './evolution-monsuelle-par-type.component';

describe('EvolutionMonsuelleParTypeComponent', () => {
  let component: EvolutionMonsuelleParTypeComponent;
  let fixture: ComponentFixture<EvolutionMonsuelleParTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvolutionMonsuelleParTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolutionMonsuelleParTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
