import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashErrorComponent } from './dash-error.component';

describe('DashErrorComponent', () => {
  let component: DashErrorComponent;
  let fixture: ComponentFixture<DashErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
