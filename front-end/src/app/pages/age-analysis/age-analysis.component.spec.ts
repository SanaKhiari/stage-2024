import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeAnalysisComponent } from './age-analysis.component';

describe('AgeAnalysisComponent', () => {
  let component: AgeAnalysisComponent;
  let fixture: ComponentFixture<AgeAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
