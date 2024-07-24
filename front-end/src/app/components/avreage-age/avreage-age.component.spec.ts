import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvreageAgeComponent } from './avreage-age.component';

describe('AvreageAgeComponent', () => {
  let component: AvreageAgeComponent;
  let fixture: ComponentFixture<AvreageAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvreageAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvreageAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
