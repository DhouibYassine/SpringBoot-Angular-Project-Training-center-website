import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashModuleComponent } from './dash-module.component';

describe('DashModuleComponent', () => {
  let component: DashModuleComponent;
  let fixture: ComponentFixture<DashModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
