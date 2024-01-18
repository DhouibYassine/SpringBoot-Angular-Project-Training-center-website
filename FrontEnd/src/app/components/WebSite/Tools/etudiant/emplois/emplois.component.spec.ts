import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploisComponent } from './emplois.component';

describe('EmploisComponent', () => {
  let component: EmploisComponent;
  let fixture: ComponentFixture<EmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
