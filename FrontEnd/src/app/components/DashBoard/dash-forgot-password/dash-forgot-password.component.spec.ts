import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashForgotPasswordComponent } from './dash-forgot-password.component';

describe('DashForgotPasswordComponent', () => {
  let component: DashForgotPasswordComponent;
  let fixture: ComponentFixture<DashForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashForgotPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
