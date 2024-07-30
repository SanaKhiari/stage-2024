import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentParServiceComponent } from './adherent-par-service.component';

describe('AdherentParServiceComponent', () => {
  let component: AdherentParServiceComponent;
  let fixture: ComponentFixture<AdherentParServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdherentParServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdherentParServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
