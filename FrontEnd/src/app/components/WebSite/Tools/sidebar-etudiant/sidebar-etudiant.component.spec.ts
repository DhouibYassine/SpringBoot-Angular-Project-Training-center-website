import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEtudiantComponent } from './sidebar-etudiant.component';

describe('SidebarEtudiantComponent', () => {
  let component: SidebarEtudiantComponent;
  let fixture: ComponentFixture<SidebarEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
