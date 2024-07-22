import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgePyramidComponent } from './age-pyramid.component';

describe('AgePyramidComponent', () => {
  let component: AgePyramidComponent;
  let fixture: ComponentFixture<AgePyramidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgePyramidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgePyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
