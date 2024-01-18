import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterFormateurToFormationComponent } from './affecter-formateur-to-formation.component';

describe('AffecterFormateurToFormationComponent', () => {
  let component: AffecterFormateurToFormationComponent;
  let fixture: ComponentFixture<AffecterFormateurToFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterFormateurToFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterFormateurToFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
