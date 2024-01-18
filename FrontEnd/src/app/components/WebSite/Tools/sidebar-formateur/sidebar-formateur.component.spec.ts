import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFormateurComponent } from './sidebar-formateur.component';

describe('SidebarFormateurComponent', () => {
  let component: SidebarFormateurComponent;
  let fixture: ComponentFixture<SidebarFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
