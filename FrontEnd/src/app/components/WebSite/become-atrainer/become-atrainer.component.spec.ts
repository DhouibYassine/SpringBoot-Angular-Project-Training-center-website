import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeATrainerComponent } from './become-atrainer.component';

describe('BecomeATrainerComponent', () => {
  let component: BecomeATrainerComponent;
  let fixture: ComponentFixture<BecomeATrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeATrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeATrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
