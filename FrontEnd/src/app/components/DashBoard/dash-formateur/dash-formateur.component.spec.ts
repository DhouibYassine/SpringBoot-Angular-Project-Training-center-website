import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFormateurComponent } from './dash-formateur.component';

describe('DashFormateurComponent', () => {
  let component: DashFormateurComponent;
  let fixture: ComponentFixture<DashFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
