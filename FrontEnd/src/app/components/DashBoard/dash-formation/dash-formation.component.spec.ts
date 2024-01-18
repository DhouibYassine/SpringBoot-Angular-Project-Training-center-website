import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFormationComponent } from './dash-formation.component';

describe('DashFormationComponent', () => {
  let component: DashFormationComponent;
  let fixture: ComponentFixture<DashFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
