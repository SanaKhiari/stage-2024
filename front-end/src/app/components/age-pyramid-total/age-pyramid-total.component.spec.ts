import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgePyramidTotalComponent } from './age-pyramid-total.component';

describe('AgePyramidTotalComponent', () => {
  let component: AgePyramidTotalComponent;
  let fixture: ComponentFixture<AgePyramidTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgePyramidTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgePyramidTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
