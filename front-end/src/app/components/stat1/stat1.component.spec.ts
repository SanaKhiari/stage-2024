import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stat1Component } from './stat1.component';

describe('Stat1Component', () => {
  let component: Stat1Component;
  let fixture: ComponentFixture<Stat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stat1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
