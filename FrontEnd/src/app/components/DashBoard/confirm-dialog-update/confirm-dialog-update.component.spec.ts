import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogUpdateComponent } from './confirm-dialog-update.component';

describe('ConfirmDialogUpdateComponent', () => {
  let component: ConfirmDialogUpdateComponent;
  let fixture: ComponentFixture<ConfirmDialogUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
