import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceFormateurComponent } from './espace-formateur.component';

describe('EspaceFormateurComponent', () => {
  let component: EspaceFormateurComponent;
  let fixture: ComponentFixture<EspaceFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
