import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogDeleteComponent } from './confirm-dialog-delete.component';

describe('ConfirmDialogDeleteComponent', () => {
  let component: ConfirmDialogDeleteComponent;
  let fixture: ComponentFixture<ConfirmDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
